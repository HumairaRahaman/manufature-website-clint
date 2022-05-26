import { useEffect, useState } from "react"

const useOrder = () => {
    const [orders, setOrders] = useState([])
    
    
    
    
    useEffect(()=>{
        
       fetch('https://safe-headland-62485.herokuapp.com/order' 
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