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
  await axios.post('/api/post_request', login_data, {headers: {endpoint: "auth/login", "Content-Type": "application/json-patch+json",}})
    .then(res => {
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
          <button
            className="bg-grey-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => login()}
            style={{backgroundColor: 'grey !important'}}
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
        {isError ? (
          <p className="text-red-500 text-xs italic" style={{color: 'red'}}>
            Please type in the correct username or password
          </p>
        ) : (
          ""
        )}
        <Link href="/register" className="text-blue-500 text-xs underline">
          Don&#39;t have an account? Register here
        </Link>
    </form>
    </div>
  );
};

export default LoginForm;
