import React from "react"
import {
    useAuthState,
    useSendEmailVerification
} from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../firebase.init"
import Spinner from "../Local/Spinner/Spinner"

const REquireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate> 
      
    );
      
    
  }

  

  return children;
};

export default REquireAuth;
