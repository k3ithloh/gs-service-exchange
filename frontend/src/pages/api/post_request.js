import axios from 'axios';

export default async function handler(req, res) {
  const url = 'https://api.gsserviceexchange.online/api/' + req.headers.endpoint;
  try{
    const resp = await axios.post(url, req.body, {headers: {"Content-Type": "application/json-patch+json"}})
    return res.status(200).json(resp.data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}