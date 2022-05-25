import { useEffect, useState } from "react"

const useAllUser = () => {
    const [users, setUsers] = useState([])
    
    
    
    
    useEffect(()=>{
        
       fetch('http://localhost:5000/user',{
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
       .then(res=> res.json())
       .then(data => {
        setUsers(data)
          
    }
          
          
       )
        
    },[])
    return [users,setUsers]
}

export default useAllUser