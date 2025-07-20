import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let ApiProduct = createContext()
const ContextApi = ({children}) => {
    let [info , setInfo] = useState([])
    let getdata = ()=>{
         axios.get("https://dummyjson.com/products").then((response)=>{
            setInfo(response.data.products)
         })
    }
    useEffect(()=>{
    
     getdata()
    },[])
  return (
    <ApiProduct.Provider value={info}>{children}</ApiProduct.Provider>
  )
}

export  {ContextApi,ApiProduct}