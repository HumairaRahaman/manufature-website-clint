import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([])
    
    
    
    
    useEffect(()=>{
        
       fetch('https://sleepy-gorge-09017.herokuapp.com/products')
       .then(res=> res.json())
       .then(data => {
           setProducts(data)
          
    }
          
          
       )
        
    },[])
    return [products,setProducts]
}

export default useProduct