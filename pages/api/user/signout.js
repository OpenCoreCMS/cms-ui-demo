import axios from 'axios';
const bffBaseUrl = 'http://localhost:4000/api';

export default function handler(req, res) {
  const fullUrl = `${bffBaseUrl}/v1/users/logout`;
  console.log(`[API proxy] Deauthenticating user`);

  const axiosProxyConfig = {
    method: 'GET',
    url: fullUrl,
    headers: req && req.headers && req.headers.cookie ? { 'set-cookie': req.headers.cookie } : undefined
  };

  return axios(axiosProxyConfig)
    .then(function (response) {
      const responseCookies = response.headers['set-cookie'];
      res.setHeader('Set-Cookie', responseCookies[0])

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
