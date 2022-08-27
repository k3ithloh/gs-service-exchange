import axios from 'axios';

export default async function handler(req, res) {
  try{
    const resp = await axios.post('https://api.gsserviceexchange.online/api/Auth/login' , {customerName: "string", password: "string"}, {headers: {"Content-Type": "application/json-patch+json",}})
    // res.status(200).json(resp.data)
    // console.log(resp.data)
    // return {'data': resp.data, status: '200'}
    return res.status(200).json(resp.data)
  } catch (error) {
      console.error(error)
      // return res.status(error.status || 500).end(error.message)
  }
}