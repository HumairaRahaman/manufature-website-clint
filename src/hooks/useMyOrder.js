import { signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import auth from "../firebase.init"

const useMyOrder = () =>{
    const [userOrders, setUserOrders] = useState([]);
  
    const [user] = useAuthState(auth);
  
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
          fetch(`http://localhost:5000/orders?user=${user.email}`, {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => {
              console.log("res", res);
              if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("accessToken");
                navigate("/");
              }
    
              return res.json();
            })
            .then((data) => {
              setUserOrders(data);
            });
        }
      }, [user]);

      return [userOrders,setUserOrders]
}
export default useMyOrder