import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useRouter } from "next/router";
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [customerName, setCustomerName] = useState();
  const [password, setPassword] = useState()
  const [isError, setIsError] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  async function Register(props){


    let data = {
      customerName: customerName,
      password: password,
      email: email,
      fullName: fullName,
    };

    await axios.post("/api/post_request", data, {headers: {
      'Content-Type': 'application/json-patch+json',
      'Accept': 'text/plain',
      'endpoint': 'auth/register'
    }})
    .then(res => {
      console.log(res);
      if (res.status == 200) {
        setRegisterStatus(true)
      }
    })
    .catch(err => console.log(err));


    let login_data = {
      customerName: customerName,
      password: password,
    }

    await axios.post("/api/post_request", login_data, {headers: {
      'Content-Type': 'application/json-patch+json',
      'Accept': 'text/plain',
      'endpoint': 'auth/login'
    }})
    .then(res => {
      console.log(res);
      if (res.status == 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data);
        router.push('/')
      }
    })
    .catch(err => {
      console.log(err)
      setIsError(true);
    });


  }

  return (
    <div className="w-9/10 mx-auto">
      <h1 className="text-2xl text-white">Register</h1>
      <br />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
        </label>
        <input className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" onChange={({target})=>setFullName(target?.value)}/>
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
        </label>
        <input className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={({target})=>setEmail(target?.value)} />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
        </label>
        <input className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={({target})=>setCustomerName(target?.value)}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
          </label>
          <input className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={({target})=>setPassword(target?.value)}/>
        </div>
        <div className="flex items-center justify-between mb-2">
            <button style={{backgroundColor:'grey'}} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>Register()}>
                Register
            </button>
        </div>
        { isError ? <p className="text-red-500 text-xs italic" style={{color: 'red'}}>Please type in the correct username or password</p> : ''}
        <Link href="/login" className="text-blue-500 text-xs">Have an account? Login here</Link>
    </form>
    </div>
  )
}

export default LoginForm
