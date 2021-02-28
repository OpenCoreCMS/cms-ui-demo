import axios from 'axios';
const bffBaseUrl = `${process.env.OCC_API_URL}/api`;

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.redirect('/user/signin');
  }

  const payload = {
    email: req.body.email,
    password: req.body.password,
  };

  const fullUrl = `${bffBaseUrl}/v1/users/login`;

  console.log(`[API proxy] Authenticating user: ${payload.email}`);

  const axiosProxyConfig = {
    method: 'POST',
    url: fullUrl,
    data: payload,
    headers: req && req.headers && req.headers.cookie ? { 'set-cookie': req.headers.cookie } : undefined
  };

  return axios(axiosProxyConfig)
    .then(function (response) {
      const responseCookies = response.headers['set-cookie'];
      const foundOccCookie = (responseCookies.filter(x => { return x.startsWith('OCC_SID=')}))[0];
      res.setHeader('Set-Cookie', foundOccCookie);

      return res.redirect('/user');
    })
    .catch(function (error) {
      const statusCode = error.request.res.statusCode;
      return res.status(500).json({
        data: {
          error: `[API proxy] ERR fetching data. Status code: ${statusCode}. URL requested: ${fullUrl}`,
        },
      });
    });
}
