import React, { useContext } from 'react'
import Container from './Container'
import { ApiProduct } from './ContextApi'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
const Special = () => {
    let {info} =useContext(ApiProduct)
  return (
    <div className='pb-[100px]'>
        <Container>
            <div className="">
            <h2 className='font-dm font-bold text-[39px] text-[#262626] pb-[40px]'>Special Offers</h2>
          </div>
            <div className="flex flex-wrap justify-between">
                           {info.slice(24,28).map((item)=>(                    
                         <div key={item.id} className="w-[24%] ">
                           <div className="  relative group">
                               <div className="bg-[#F9F9F9]">
                               <img src={item.thumbnail} alt="" />
                           </div>
                           <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden     group-hover:h-[150px] duration-500 ease-in-out">
                                                <ul>
                                                   <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>Add to Wish List <FaHeart /></li>
                                                   <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]'>Compare <IoGitCompare /></li>
                                                   <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]'>Add to Cart <FaShoppingCart /></li>
                                               </ul>
                               </div>
                               <div className='absolute top-[20px] left-[20px]'>
                                   <a className="py-[8px] px-[30px]  bg-[#262626] inline-block text-[14px] font-bold font-dm text-white" href="#">New</a>
                               </div> 
                               </div>       
                               <div className="">
                                    <div className="flex items-center justify-between pt-[24px] pb-[15px]">
                                   <h4 className='text-[18px] font-dm font-bold text-[#262626]'>{item.title}</h4>
                                 <p className='text-[14px] font-dm font-normal text-[#767676]'>${item.price}</p>
                                 </div>
                                 <h1 className='text-[16px] font-dm font-normal text-[#767676]'>{item.stock}</h1>
                               </div>            
                           </div>              
                           ))}
                        </div>
        </Container>
    </div>
  )
}

export default Special