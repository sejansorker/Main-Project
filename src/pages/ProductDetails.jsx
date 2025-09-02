import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  let ProductId = useParams()
  let [singleData, setSingleData] = useState({})
  let getSingleData = ()=>{
      axios.get(`https://dummyjson.com/products/${ProductId.id}`).then((response)=>{
         setSingleData(response.data)
      })
  }
  useEffect(()=>{
    
    getSingleData()
  })
 
  
  return (
    <>
        <div className="flex justify-center">
          <img src={singleData.thumbnail} alt="" />
        </div>
        <div className="flex justify-center text-yellow-500 items-center"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <h3 className='pl-5 text-[#767676] font-dm font-normal'>1 Review</h3>
        </div>
        
    </>
  )
}

export default ProductDetails