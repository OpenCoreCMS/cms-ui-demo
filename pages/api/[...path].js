// We proxy all requests to the dedicated BFF (Backend For Frontend)

// eslint-disable-next-line no-undef
const axios = require('axios');
const bffBaseUrl = 'http://localhost:4000/api';

export default function handler(req, res) {
  const urlSegments = req.query.path.map((x) => {
    return encodeURIComponent(x);
  });

  if (!Array.isArray(urlSegments) || !urlSegments.length) {
    return res.status(500).send('Bad request');
  }

  // should this rewrite all keys (other than reserved names)?
  // only whitelisted?
  const queryString = req.query.phrase ? `?phrase=${req.query.phrase}` : null;

  const fullPath = urlSegments.join('/');
  const fullUrl = `${bffBaseUrl}/${fullPath}${queryString ? queryString : ''}`;
  console.log(`[API proxy] Fetching data from: ${fullUrl}`);

  return axios.get(fullUrl)
    .then(function (response) {
      const fullData = response.data.data;
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
