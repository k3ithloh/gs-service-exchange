import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const [customerName, setCustomerName] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState(false);

  async function login() {
    let login_data = {
        customerName: customerName,
        password: password,
    };
  //   await axios.post("https://api.gsserviceexchange.online/api/Auth/login", {
  //     "customerName": "string",
  //     "password": "string",
  //   // data: ,
  // }, {headers: {
  //   "Content-Type": "application/json-patch+json",
  //   crossdomain: true
  // }})
  await axios.post('/api/api_request', {"customerName": "string", "password": "string"}, {headers: {endpoint: "auth/login"}})
    .then(res => {
      console.log(res.data);
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
      <h1 className="text-2xl text-white">Login</h1>
      <br />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Username
        </label>
        <input className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={( {target} ) => setCustomerName(target?.value) } />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={({ target }) => setPassword(target?.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">

            <button className="bg-blue hover:bg-dark_blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={ () => login()}>
                Sign In
            </button>
            <Link className="inline-block align-baseline" href="#">
                <a className='font-bold text-sm text-blue hover:text-dark_blue"'>
                  Forgot Password?
                </a>
            </Link>
        </div>
        { isError ? <p className="text-red-500 text-xs italic">Please type in the correct username or password</p> : ''}
        <Link href="/register">
          <a className="text-blue text-xs">Don&#39;t have an account? Register here</a>
        </Link>
    </form>
    </div>
  );
};

export default LoginForm;
