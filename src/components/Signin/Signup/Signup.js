import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init'
import useToken from '../../../hooks/useToken'
import Spinner from '../../Local/Spinner/Spinner'
import SocialLogin from '../SocialLogin/SocialLogin'


const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
   

    const [createUserWithEmailAndPassword,user,loading,error1] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true})
    let errorElement
    const [token] = useToken(user);
    const navigate = useNavigate()
    const location = useLocation()
  
    const from = location.state?.from?.pathname || "/"
  
    

    const handelEmailBlur = event =>{
        setEmail(event.target.value)
        
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value)
    }

    const handelConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }


    const handelCreateUser = event =>{
        event.preventDefault()

        if(password !== confirmPassword){
            setError("Your Two password did't match")
            return
        }

        if(password.length <6){
            setError("password must be 6 character or longer")
        }
        createUserWithEmailAndPassword(email,password)

        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    useEffect(() => {
      if (token) {
        navigate(from, { replace: true });
      }
    }, [navigate, token, from]);

    // if(token){
    //   navigate(from, { replace: true })
    // }
    if (error1) {
      errorElement = (
        <div>
          <p className=' text-red-500'>Error: {error1.message}</p>
        </div>
      )
    }

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <>
        <div className="min-h-screen bg-gradient-to-t from-yellow-100 via-gray-300 to-amber-200 flex justify-center items-center">
        <div className="py-12 px-4 sm:px-12 bg-white rounded-2xl shadow-xl mx-20 sm:mx-0 my-8">
          <div>
            <h1 className="text-3xl   text-center mb-4 cursor-pointer text-transparent bg-clip-text font-bold bg-gradient-to-br from-amber-500 to-gray-500  cursor-pointe">
              Please Sign up
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-cyan-800 tracking-wide cursor-pointer">
              Sign Up your account to enjoy all the services without any ads for
              free!
            </p>
          </div>
          <SocialLogin></SocialLogin>
          <form onSubmit={handelCreateUser}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required
              onBlur={handelEmailBlur}
            />
            <input
              type="password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required
              onBlur={handelPasswordBlur}
            />
            <input
              type="password"
              placeholder="Confirm-Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required
              onBlur={handelConfirmPasswordBlur}
            />
          </div>
          <p className=' text-red-500'>{error}</p>
          {errorElement}
          <div className="text-center mt-6">
            <button type='submit' className="py-3 w-64 text-xl font-bold text-gray-600 rounded-full  bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400">
              Sign Up
            </button>
            <p className="mt-4 text-sm">
              Do you have an account?
              <Link to='/signin'><span className="underline cursor-pointer text-amber-800">
               Sign in here 
              </span></Link>
            </p>
          
          </div>
          </form>
        </div>
      </div>
      </>
    )
}

export default Signup