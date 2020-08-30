export default function handler(req, res) {
  res.status(200).send('OK. API proxying should be restricted in production.')
}
