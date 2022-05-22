import React, { useState } from "react"
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import auth from "../../../firebase.init"
import useToken from "../../../hooks/useToken"
import Spinner from "../../Local/Spinner/Spinner"
import SocialLogin from "../SocialLogin/SocialLogin"



const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
  let errorElement

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  if (loading) {
    return <Spinner></Spinner>
  }
  const handelEmailBlur = (event) => {
    setEmail(event.target.value)
  }

  const handelPasswordBlur = (event) => {
    setPassword(event.target.value)
  }

  if (token) {
    navigate(from, { replace: true });

  }
  if (error) {
    errorElement = (
      <div>
        <p className=" text-red-500">Error: {error?.message}</p>
      </div>
    )
  }
  const handleUserSignIn = async event => {
    event.preventDefault()
    await signInWithEmailAndPassword(email, password);
    setEmail("")
    setPassword("")
   

  }

  const resetPassword = async () => {
    await sendPasswordResetEmail(email)
    toast.info("Sent email", { position: toast.POSITION.TOP_CENTER })
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-yellow-100 via-gray-300 to-amber-200 flex justify-center items-center">
      <div className="py-12 px-4 sm:px-12 bg-white rounded-2xl shadow-xl  mx-40 sm:mx-0 my-8">
        
        <div>
          <h1 className="text-3xl   text-center mb-4 cursor-pointer text-transparent bg-clip-text font-bold bg-gradient-to-br from-amber-500 to-gray-500  cursor-pointe">
            Please Sign in
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-cyan-800 tracking-wide cursor-pointer">
            Sign In your account to enjoy all the services without any ads for
            free!
          </p>
          <p className="mt-4 text-sm">
            Don't have account?
            <Link to="/signup">
              <span className="underline cursor-pointer text-amber-800">
                Sign Up here
              </span>
            </Link>
          </p>
        </div>
        <SocialLogin></SocialLogin>
        <form onSubmit={handleUserSignIn}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              required
              onBlur={handelEmailBlur}
            />
            <input
              type="Password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              required
              onBlur={handelPasswordBlur}
            />
          </div>
          {errorElement}
          <div className="text-center mt-6">
            <button className="py-3 w-64 text-xl font-bold text-gray-600 rounded-full  bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400">
              Sign In
            </button>
            <ToastContainer />
            <p className="mt-4 text-sm">
              Forgot password?
              <span
                onClick={resetPassword}
                className="underline cursor-pointer text-amber-800"
              >
                Reset Password
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
