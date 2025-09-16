import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { RiMenuSearchFill } from 'react-icons/ri'
import { IoCart, IoSearch } from 'react-icons/io5'
import { FaBars, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Div from "../assets/div.png"
import { Link } from 'react-router-dom'



const Navbar = () => {
    let [cateShow, setCateShow] = useState(false)
    let [accShow, setAccShow] = useState(false)
    let [bccShow, setBccShow] = useState(false)
    let cateRef = useRef()
    let accRef = useRef()
    let bccRef = useRef()
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target) == true) {
                setCateShow(!cateShow)
            } else {
                setCateShow(false)
            }
        })
    }, [cateShow])
   useEffect(()=>{
        document.addEventListener("click",(e)=>{
           if(accRef.current.contains(e.target) ==true){
             setAccShow(!accShow)
           } else{
            setAccShow(false)
           }
         
        })
   },[accShow])
   useEffect(()=>{
         document.addEventListener("click",(e)=>{
            if(bccRef.current.contains(e.target)==true){
               setBccShow(!bccShow)
            }
            else{
               setBccShow(false)
            }
         })
   },[bccShow])
    return (
        <nav className="bg-[#F5F5F3] py-[10px] lg:py-[20px] ">
            <Container>
                <div className="flex items-center flex-wrap">
                    <div className="lg:w-1/4 w-1/6  relative">
                        <div className="flex items-center  lg:gap-x-[10px] " ref={cateRef}>
                            <div className="" >
                                <RiMenuSearchFill className='text-[#262626] cursor-pointer' />
                            </div>
                            <h4 className='font-dm cursor-pointer lg:block hidden font-normal text-[14px] text-[#262626]'>Shop by Category</h4>
                        </div>
                        <div className={`transform transition-all z-1 absolute top-[38px] lg:top-[55px] left-0  origin-top duration-600 ease-in-out ${cateShow ? " scale-y-100  pointer-events-auto" : " scale-y-0 pointer-events-none"}`}>
                            <div className={`bg-[#262626] lg:w-[263px] w-[151px]   `} >
                                <ul >
                                    <li className='lg:py-[16px] py-[8px] group flex relative items-center gap-[55px] lg:gap-[145px] pl-[10px] lg:pl-[21px] text-[12px] lg:text-[14px] font-dm  font-normal border-b-1 border-[rgba(255,255,255,0.7)] hover:text-white hover:pl-[20px] lg:hover:pl-[30px] duration-300 ease-in-out  text-[rgba(255,255,255,0.7)] '>Accesories <MdKeyboardArrowRight />
                                        <ul className=" absolute duration-300 top-0 left-[100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible px-[20px] lg:px-[40px] lg:py-[19px] pt-[10px] w-[100px] lg:w-[150px] bg-[#F5F5F3]">
                                            <li className='text-[#262626] hover:text-[#262626] hover:font-bold  lg:pb-[15px] pb-[7px] font-dm lg:text-[16px] text-[14px] font-bold'>Phones</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px] font-bold'>Phones1</li>
                                            <li  className='text-[#767676] hover:text-[#262626] hover:font-bold  font-dm lg:pb-[12px] pb-[5px] lg:text-[14px] text-[12px] font-bold'>Phones2</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px] font-bold'>Phones3</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px] font-bold'>Phones4</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px] font-bold'>Phones5</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[5px] pb-[3px] font-dm lg:text-[14px] text-[12px] font-bold'>Phones6</li>
                                            
                                        </ul>
                                    </li>
                                    <li className='lg:py-[16px] py-[8px] relative  group flex items-center gap-[65px] lg:gap-[157px]  lg:pl-[21px] pl-[10px] text-[12px] lg:text-[14px] font-dm  font-normal border-b-1 border-[rgba(255,255,255,0.7)] hover:text-white hover:pl-[20px] lg:hover:pl-[30px] duration-300 ease-in-out  text-[rgba(255,255,255,0.7)]'>Furniture < MdKeyboardArrowRight />
                                     <ul className=" absolute duration-300 lg:top-[-55px] top-0 left-[100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible px-[20px] lg:px-[40px] lg:py-[19px] py-[10px] lg:w-[150px] w-[110px] bg-[#F5F5F3]">
                                            <li className='text-[#262626] hover:text-[#262626] hover:font-bold  lg:pb-[15px] pb-[7px] font-dm lg:text-[16px] text-[14px] font-bold'>Computers</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px] font-bold'>Computers1</li>
                                            <li  className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px]  font-bold'>Computers2</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px]  font-bold'>Computers3</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px]  font-bold'>Computers4</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px]  font-bold'>Computers5</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px]  font-bold'>Computers6</li>
                                            
                                        </ul>
                                    </li>
                                    <li className='lg:py-[16px] py-[8px] flex group items-center relative lg:gap-[144px] gap-[55px] pl-[10px] lg:pl-[21px] text-[12px] lg:text-[14px] font-dm  font-normal border-b-1 border-[rgba(255,255,255,0.7)] hover:text-white lg:hover:pl-[30px] hover:pl-[20px] duration-300 ease-in-out  text-[rgba(255,255,255,0.7)]'>Electronics < MdKeyboardArrowRight />
                                      <ul className=" absolute duration-300 lg:top-[-105px] top-0 left-[100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible px-[20px] lg:px-[40px] lg:py-[19px] py-[10px] w-[140px] lg:w-[220px] bg-[#F5F5F3]">
                                            <li className='text-[rgb(38,38,38)] hover:text-[#262626] hover:font-bold  lg:pb-[15px] pb-[7px] font-dm lg:text-[16px] text-[14px] font-bold'>Smart watches</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px]  font-dm lg:text-[14px] text-[12px] font-bold'>Smart watches1</li>
                                            <li  className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px font-bold'>Smart watches2</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px font-bold'>Smart watches3</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px font-bold'>Smart watches4</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px font-bold'>Smart watches5</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm lg:text-[14px] text-[12px font-bold'>Smart watches6</li>
                                            
                                        </ul>
                                    </li>
                                    <li className='lg:py-[16px] py-[8px] relative  group flex items-center lg:gap-[165px] gap-[73px] lg:pl-[21px] pl-[10px]  text-[12px] lg:text-[14px] font-dm  font-normal border-b-1 border-[rgba(255,255,255,0.7)] hover:text-white lg:hover:pl-[30px] hover:pl-[20px] duration-300 ease-in-out  text-[rgba(255,255,255,0.7)]'>Clothes < MdKeyboardArrowRight />
                                      <ul className=" absolute duration-300 top-0 lg:top-[-163px] left-[100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible px-[20px] lg:px-[40px] lg:py-[19px] py-[10px] lg:w-[150px] w-[110px] bg-[#F5F5F3]">
                                            <li className='text-[#262626] hover:text-[#262626] hover:font-bold   lg:pb-[15px] pb-[7px] font-dm text-[14px] lg:text-[16px] font-bold'>Cameras</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm text-[12px] lg:text-[14px] font-bold'>Cameras1</li>
                                            <li  className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm text-[12px] lg:text-[14px] font-bold'>Cameras2</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm text-[12px] lg:text-[14px] font-bold'>Cameras3</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm text-[12px] lg:text-[14px] font-bold'>Cameras4</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[12px] pb-[5px] font-dm text-[12px] lg:text-[14px] font-bold'>Cameras5</li>
                                            <li className='text-[#767676] hover:text-[#262626] hover:font-bold lg:pb-[7px] pb-[0px] font-dm text-[12px] lg:text-[14px] font-bold'>Cameras6</li>                                           
                                        </ul>
                                    </li>
                                    <li className='lg:py-[16px] py-[8px] gap-[85px]  flex items-center lg:gap-[180px]  lg:pl-[21px] pl-[10px] text-[12px] lg:text-[14px] font-dm  font-normal border-b-1 border-[rgba(255,255,255,0.7)] hover:text-white lg:hover:pl-[30px] hover:pl-[20px] duration-300 ease-in-out  text-[rgba(255,255,255,0.7)]'>Bags < MdKeyboardArrowRight /></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="lg:w-2/4 w-3/6">
                        <div className="relative">
                            <input type="text" placeholder='Search Products' className='lg:w-[90%] w-[100%] font-dm text-[12px] lg:text-[14px] lg:py-[16px] py-[10px] pl-[10px] bg-white focus:outline-none' />
                            <div className="absolute lg:right-[80px] right-[10px] top-[50%] translate-y-[-50%]">
                                <IoSearch className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 w-2/6">
                        <div className="flex justify-end lg:gap-x-[25px] gap-x-[12px] relative ">
                            <div className="flex gap-x-[7px]" ref={accRef}>
                                <FaUser className='text-[#262626] cursor-pointer' />
                                <IoMdArrowDropdown className='text-[#262626] cursor-pointer ' />
                            </div>
                            <div className=" " ref={bccRef}>
                                <IoCart className="text-[#262626] cursor-pointer" />
                            </div>
                            {accShow &&
                            <div className="lg:w-[200px] w-[100px] z-2 bg-[#262626] absolute top-[30px] lg:right-[45px] right-[35px]" >
                                <ul>
                                    <li className='lg:py-[16px] py-[8px] text-center text-[12px] lg:text-[14px] font-bold font-dm cursor-pointer text-white  hover:bg-white duration-500 ease-in-out hover:text-[#262626]'>My Account</li>
                                    <li className='lg:py-[16px] py-[8px] text-center text-[12px] lg:text-[14px] font-bold font-dm cursor-pointer text-white hover:bg-white duration-500 ease-in-out hover:text-[#262626]'>Log Out</li>
                                </ul>
                            </div>
                             }
                             {bccShow &&
                             <div className="absolute z-3 top-[45px] right-0 w-[202px] lg:w-[358px]">
                                <div className="bg-[#F5F5F3] hover:bg-white duration-300 ease-in-out py-[10px] lg:py-[20px] lg:pl-[20px] pl-[10px] flex items-center">
                                    <div className=""><img src={Div} alt="" /></div>
                                    <div className="lg:pl-[20px] pl-[10px] pr-[20px] lg:pr-[73px]">
                                        <h4 className='font-dm font-bold text-[10px] lg:text-[14px] text-[#262626]'>Black Smart Watch</h4>
                                        <p className='font-dm pt-[5px] lg:pt-[10px] font-bold text-[10px] lg:text-[14px] text-[#262626]'>$44.00</p>
                                    </div>
                                    <div className="">
                                        <RxCross2/>
                                    </div>
                                </div>
                                <div className="bg-[#F5F5F3] hover:bg-white duration-300 ease-in-out pl-[10px] lg:pl-[20px] pb-[10px] lg:pb-[20px]">
                                    <div className="lg:py-[14px] py-[7px]">
                                        <h4 className='font-dm font-bold text-[12px] lg:text-[16px] text-[#262626]'><span className='text-[#767676]'>Subtotal:</span> $44.00</h4>
                                    </div>
                                    <div className=" hover:bg-white">
                                        <ul className='flex gap-[10px] lg:gap-[20px] '>
                                            <Link to={"/cart"}>
                                            <li  className='lg:py-[16px] py-[8px] border-2 ease-in-out duration-500 hover:bg-black cursor-pointer hover:text-white border-[#2B2B2B] px-[15px] lg:px-[40px] font-bold text-[10px] lg:text-[14px] text-[#262626] font-dm'>View Cart</li>
                                            </Link>
                                            <li className='lg:py-[16px] py-[8px] cursor-pointer border-2 ease-in-out duration-500 hover:bg-black hover:text-white border-[#2B2B2B] px-[20px] lg:px-[43px] font-bold text-[12px] lg:text-[14px] text-[#262626] font-dm'>Checkout</li>
                                        </ul>
                                    </div>
                                </div>
                             </div>
                             }
                        </div>
                    </div>
                </div>
            </Container>
        </nav>

    )
}

export default Navbar