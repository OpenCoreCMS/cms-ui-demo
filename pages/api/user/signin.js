// eslint-disable-next-line no-undef
const axios = require('axios');
const bffBaseUrl = 'http://localhost:4000/api';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end() //Method Not Allowed
  }

  const payload = {
    email: req.body.email,
    password: req.body.password,
  };

  // return res.status(200).json({hello: 'test'});

  const fullUrl = `${bffBaseUrl}/v1/users/login`;
  console.log(`[API proxy] Authenticating user: ${payload.email}`);

  return axios.post(fullUrl, payload)
    .then(function (response) {
      const fullData = response.data;
      console.log(fullData);
      return res.status(200).json(fullData);
    })
    .catch(function (error) {
      const statusCode = error.request.res.statusCode;
      // response.config.url;
      return res.status(500).json({
        data: {
          error: `[API proxy] ERR fetching data. Status code: ${statusCode}. URL requested: ${fullUrl}`,
        },
      });
    });
}
