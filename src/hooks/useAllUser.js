import { useEffect, useState } from "react"

const useAllUser = () => {
    const [products, setProducts] = useState([])
    
    
    
    
    useEffect(()=>{
        
       fetch('http://localhost:5000/user',{
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
       .then(res=> res.json())
       .then(data => {
           setProducts(data)
          
    }
          
          
       )
        
    },[])
    return [products,setProducts]
}

export default useAllUser