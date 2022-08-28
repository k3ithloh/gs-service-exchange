import axios from 'axios';

export default function handler(req, res) {
  const url = 'https://api.gsserviceexchange.online/api/' + req.headers.endpoint;
  try{
    const resp = axios.get(url, req.body, {headers: {
      'Authorization': req.headers.authorization,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      },
    });
    return res.status(200).json(resp.data)
  } catch (error) {
    console.error(error)
    return res.status(500).json(error)
  }
}