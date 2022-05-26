import { useEffect, useState } from "react"

const useOrder = () => {
    const [orders, setOrders] = useState([])
    
    
    
    
    useEffect(()=>{
        
       fetch('http://localhost:5000/order' 
    ,{
    //     method: "GET",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
      }
      )
       .then(res=> res.json())
       .then(data => {
           setOrders(data)
          
    }
          
          
       )
        
    },[])
    return [orders,setOrders]
}

export default useOrder