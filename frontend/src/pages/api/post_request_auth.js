import axios from 'axios';

export default async function handler(req, res) {
  const params = new URLSearchParams({
    customerName: req.body.customerName,
    solutionId: req.body.solutionId,
  }).toString();
  const url = 'https://api.gsserviceexchange.online/api/' + req.headers.endpoint + '?' + params;
  console.log(url)
  console.log(req.headers.authorization)
  try{
    const resp = await axios.post(url, req.body, {headers: {
      'Authorization': req.headers.authorization,
      'accept': 'text/plain'
      },
    });
    console.log(resp.data);
    return res.status(200).json(resp.data)
  } catch (error) {
    console.error(error)
  }
}