import { useEffect, useState } from "react"

const useAllUser = () => {
    const [users, setUsers] = useState([])
    
    
    
    
    useEffect(()=>{
        
       fetch('https://safe-headland-62485.herokuapp.com/user',{
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