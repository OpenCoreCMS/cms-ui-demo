import axios from 'axios';
const bffBaseUrl = 'http://localhost:4000/api';

function constructQueryString(qs) {
  const allowedProps = ['phrase', 'pageNumber', 'pageSize', 'subjectId', 'type'];
  const qsElements = [];

  allowedProps.forEach((prop) => {
    if (typeof qs[prop] === 'string' && qs[prop] !== 'undefined') {
      qsElements.push(`${prop}=${qs[prop]}`);
    }
  });

  return qsElements.length ? `?${qsElements.join('&')}` : '';
}

// Catch-all proxy for requests to OPP BFF
export default function handler(req, res) {
  const urlSegments = req.query.path.map((x) => {
    return encodeURIComponent(x);
  });

  if (!Array.isArray(urlSegments) || !urlSegments.length) {
    return res.status(500).send('Bad request');
  }

  // should this rewrite all keys (other than reserved names)?
  // only whitelisted?
  const queryString = constructQueryString(req.query);

  const fullPath = urlSegments.join('/');
  const fullUrl = `${bffBaseUrl}/${fullPath}${queryString ? queryString : ''}`;
  console.log(`[API proxy] Fetching data from: ${fullUrl}`);

  const axiosProxyConfig = {
    method: 'get',
    url: fullUrl,
    headers: req && req.headers && req.headers.cookie ? { cookie: req.headers.cookie } : undefined
  }

  return axios(axiosProxyConfig)
    .then(function (response) {
      const fullData = response.data.data;
      return res.status(200).json(fullData);
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
