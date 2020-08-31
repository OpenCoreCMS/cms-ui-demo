// We proxy all requests to the dedicated BFF (Backend For Frontend)
const axios = require('axios');
const bffBaseUrl = 'http://localhost:4000/api';

export default function handler(req, res) {
  const urlSegments = req.query.path.map((x) => {
    return encodeURIComponent(x);
  });

  if (!Array.isArray(urlSegments) || !urlSegments.length) {
    return res.status(500).send('Bad request');
  }

  const fullPath = urlSegments.join('/');
  const fullUrl = `${bffBaseUrl}/${fullPath}`;
  console.log(`Fetching the data from API (via UI app proxy): ${fullUrl}`);

  let fullData;

  return axios.get(fullUrl)
  .then(function (response) {
    fullData = response.data.data;
  })
  .catch(function (error) {
    console.log(error.request.res.statusCode);
    // return res.status(500).send('Bad response from API');
    fullData = error
  })
  .then(function () {
    return res.status(200).json(fullData);
  });

}
