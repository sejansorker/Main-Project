import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let ApiProduct = createContext()
const ContextApi = ({children}) => {
    let [info , setInfo] = useState([])
    let [loading, setloading] = useState(true)
    let getdata = ()=>{
         axios.get("https://dummyjson.com/products").then((response)=>{
            setInfo(response.data.products)
            setloading(false)
         })
    }
    useEffect(()=>{
     getdata()
    },[])
  return (
    <ApiProduct.Provider value={{info,loading}}>{children}</ApiProduct.Provider>
  )
}

export  {ContextApi,ApiProduct}