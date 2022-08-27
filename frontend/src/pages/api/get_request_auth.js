import axios from 'axios';

export default function handler(req, res) {
  const url = 'https://api.gsserviceexchange.online/api/' + req.headers.endpoint;
  console.log(req.headers.authorization)
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
  }
}