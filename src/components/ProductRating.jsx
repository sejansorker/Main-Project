import React from 'react'
import { CiStar } from 'react-icons/ci';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductRating = ({rating}) => {
    const fullRating = Math.floor(rating) || 0
    const half = rating % 1 >= 0.5
    const emptyRating = 5 - fullRating - (half ? 1 : 0)
  return (
    <div className='flex'>
        {[...Array(fullRating)].map(()=>(
        <FaStar className='text-[#FFD881]'/>
    ))}
    {half && <FaStarHalfAlt className='text-[#FFD881]' />}
    {[...Array(emptyRating)].map(()=>(
        <FaRegStar className='text-[#FFD881]'/>
    ))}
    </div>
  )
}

export default ProductRating