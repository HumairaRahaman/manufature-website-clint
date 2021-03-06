import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase.init"

const useUser = () => {
    const [InfoUser, setUser] = useState([])
    const [user] = useAuthState(auth);
    const email = user.email;
    
    
    useEffect(()=>{
        
       fetch(`https://safe-headland-62485.herokuapp.com/user/${email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
       .then(res=> res.json())
       .then(data => {
        setUser(data)
          
    }
          
          
       )
        
    },[])
    return [InfoUser,setUser]
}

export default useUser