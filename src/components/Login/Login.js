import React, { useEffect } from "react"
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import auth from "../../firebase.init"
import useToken from "../../hooks/useToken"
import Spinner from "../Local/Spinner/Spinner"

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);



  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
const [token] = useToken(user || gUser)

    let navigate = useNavigate();
    let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);


  let signInError;




  if (loading || gLoading) {
    return <Spinner></Spinner>;
  }

  if (error || gError) {
    signInError = (
      <p className=" text-red-600">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = (data) => {
   

    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className=" flex h-screen  mt-24 mb-20 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-center font-semibold text-2xl">Login</h2>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}

            <input
              className="btn w-full max-w-xs text-white bg-primary font-semibold"
              type="submit"
              value="Login"
            />
          </form>
          <p className=" text-sm text-center">
            New to Doctors Portal?
            <Link className=" text-secondary " to="/signup">
              {" "}
              Create New Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
<h2>login</h2>;
