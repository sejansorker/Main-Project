import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import One from "../assets/one.png"
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
const Cart = () => {
  const data = useSelector(state => state.cartDtails.cartItems)
  console.log(data);
  const singleData = data.map((item)=>item.title
)
console.log(singleData);
  return (
    <div className='mb-30'>
        <Container>
            <div className="w-2/12 py-[100px]">
            <div className="">
              <h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Cart</h2>
            </div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link to={"/"} className="inline-flex items-center text-sm font-medium text-[#767676] hover:text-[#000] dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/shop"}>
                    <div className="flex items-center">
                      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <a href="#" className="ms-1 text-sm font-medium text-[#767676] hover:text-[#000] md:ms-2 dark:text-gray-400 dark:hover:text-white">Shop</a>
                    </div>
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>

                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex bg-[#F5F5F3] py-[33px]">
            <div className="w-1/4">
            <p className='pl-5 font-dm font-bold text-[16px] text-[#262626]'>Product</p>
            </div>
            <div className="w-1/4">
            <p  className='font-dm font-bold text-[16px] text-[#262626]'>Price</p>
            </div>
             <div className="w-1/4">
            <p className='font-dm font-bold text-[16px] text-[#262626]'>Quantity</p>
            </div>
            <div className="w-1/4">
            <p className='font-dm font-bold text-[16px] text-[#262626]'>Total</p>
            </div>
          </div>
          <div className="flex py-7.5 border-2 border-[#F0F0F0] items-center">
            <div className="w-1/4">
             <div className="flex items-center gap-5 pl-5">
                <p ><RxCross2 className='font-dm font-bold text-[16px] text-[#262626]' /></p>
             <img className='w-24' src={One} alt="" />
             <p className='font-dm font-bold text-[16px] text-[#262626]'>Product name</p>
             </div>
            </div>
            <div className="w-1/4">
            <p className='font-dm font-bold text-[16px] text-[#262626]'>$44.00</p>
            </div>
             <div className="w-1/4">
            <div className="flex py-1 items-center px-5 border-2 border-[#F0F0F0] w-fit gap-9">
                <p className='font-dm font-bold text-[16px] text-[#262626]'>-</p>
                <p className='font-dm font-bold text-[16px] text-[#262626]'>1</p>
                <p className='font-dm font-bold text-[16px] text-[#262626]'>+</p>
            </div>
            </div>
            <div className="w-1/4">
            <p className='font-dm font-bold text-[16px] text-[#262626]'>$44.00</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-x-2 border-b mb-13.5 border-[#EAEAEA]">
            <div className="flex items-center gap-[23px] py-5 pl-5">
              <div className="flex items-center w-50 pl-5 py-3 pr-2  border-2 border-[#EAEAEA] justify-between">
              <h4>size</h4>
              <select name="" id="" className='focus:outline-0 '>
                <option value="">s</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
              <h4 className='text-[14px] text-[#262626] font-dm font-bold'>Apply coupon</h4>
            </div>
            <div >
              <h5 className='pr-5 text-[14px] text-[#262626] font-dm font-bold'>Update cart</h5>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-2/5">
            <h4 className='font-dm font-bold text-[20px] text-end text-[#262626] pb-6'>Cart totals</h4>
            <div className="mb-7.5">
              <div className="flex ">
                <h5 className='w-[320px] py-[15px] pl-5 border-y-2 border-l-2 border-[#F0F0F0] font-dm font-bold text-[16px]  text-[#262626]'>Subtotal</h5>
                <p className='w-[320px] py-[13px] pl-5 border-y-2 border-x-2 border-[#F0F0F0] text-[#767676]'>389.99 $</p>
              </div>
              <div className="flex">
                <h5 className='w-[320px] py-[15px] pl-5 border-l-2 border-b-2 border-[#F0F0F0] font-dm font-bold text-[16px]  text-[#262626]'>Total</h5>
                <p className='w-[320px] py-[13px] pl-5 border-x-2 border-b-2 border-[#F0F0F0] text-[#767676]'>389.99 $</p>
              </div>
            </div>
            <div className="text-end">
              <button className='py-4 cursor-pointer px-7 bg-black text-white font-dm font-bold text-[14px]'>Proceed to Checkout</button>
            </div>
            </div>
          </div>
       
        </Container>
    </div>
  )
}

export default Cart