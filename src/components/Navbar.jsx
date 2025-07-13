import React, { useState } from 'react'
import Container from './Container'
import { RiMenuSearchFill } from 'react-icons/ri'
import { IoCart, IoSearch } from 'react-icons/io5'
import { FaBars, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'



const Navbar = () => {
    let [show, setShow] = useState(false)
    let [info, setInfo] =useState(false)
    let [out, setOut] = useState(false)
    return (
        <nav className="bg-[#F5F5F3] py-[20px]  ">
            <Container>
                <div className="flex items-center flex-wrap">
                    <div className="w-1/4  ">
                        <div className="flex items-center gap-x-[10px] relative">
                            <div className="" onClick={() => setShow(!show)}>
                                <RiMenuSearchFill className='text-[#262626] cursor-pointer' />
                            </div>
                            <div className="absolute lg:top-[40px]  top-[30px] lg:right-[50px] right-[-50px] z-10 lg:w-[263px] ">
                                <ul className={`transform transition-all origin-top duration-800 ease-in-out ${show == true ? "bg-[#2D2D2D]   scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"} `}>
                                    <li className='border-b-1 border-[rgba(255,255,255,0.7)] flex items-center lg:gap-[145px]'><a className='hover:text-white lg:py-[16px] text-[14px] font-dm font-normal inline-block pl-[20px] text-[rgba(255,255,255,0.7)]' href="#">Accesories</a><MdKeyboardArrowRight className='hover:text-white text-[rgba(255,255,255,0.7)] text-[14px]' /></li>

                                    <li className='border-b-1 border-[rgba(255,255,255,0.7)] flex items-center lg:gap-[157px]'><a className='hover:text-white lg:py-[16px] text-[14px] font-dm font-normal inline-block pl-[20px]  text-[rgba(255,255,255,0.7)]' href="#">Furniture</a><MdKeyboardArrowRight className='   hover:text-white text-[rgba(255,255,255,0.7)] text-[14px] ' /></li>

                                    <li className='border-b-1 border-[rgba(255,255,255,0.7)] flex items-center lg:gap-[145px]'><a className=' hover:text-white lg:py-[16px] text-[14px] font-dm font-normal inline-block pl-[20px] text-[rgba(255,255,255,0.7)]' href="#">Electronics</a><MdKeyboardArrowRight className='hover:text-white text-[rgba(255,255,255,0.7)] text-[14px] ' /></li>
                                    
                                    <li className='border-b-1 border-[rgba(255,255,255,0.7)] flex items-center lg:gap-[165px]'><a className='hover:text-white lg:py-[16px] text-[14px] font-dm font-normal inline-block pl-[20px] text-[rgba(255,255,255,0.7)]' href="#">Clothes</a><MdKeyboardArrowRight className='hover:text-white text-[rgba(255,255,255,0.7)] text-[14px] ' /></li>
                                    
                                    <li className='border-b-1 border-[rgba(255,255,255,0.7)] flex items-center lg:gap-[179px]'><a className='hover:text-white lg:py-[16px] text-[14px] font-dm font-normal inline-block pl-[20px] text-[rgba(255,255,255,0.7)]' href="#">Bags</a><MdKeyboardArrowRight className='hover:text-white text-[rgba(255,255,255,0.7)] text-[14px] ' /></li>
                                    
                                    <li className='border-b-1 border-[rgba(255,255,255,0.7)] flex items-center lg:gap-[102px]'><a className='hover:text-white lg:py-[16px] text-[14px] font-dm font-normal inline-block pl-[20px] text-[rgba(255,255,255,0.7)]' href="#">Home appliances</a><MdKeyboardArrowRight className='hover:text-white text-[rgba(255,255,255,0.7)] text-[14px] ' /></li>
                                </ul>
                            </div>
                            <h4 className='font-dm font-normal text-[14px] text-[#262626]'>Shop by Category</h4>
                        </div>
                    </div>
                    <div className="w-2/4 ">
                        <div className="relative">
                            <input type="text" placeholder='Search Products' className='w-[90%] font-dm text-[14px] py-[16px] pl-[10px] bg-white focus:outline-none' />
                            <div className="absolute right-[80px] top-[50%] translate-y-[-50%]">
                                <IoSearch className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <div className="flex justify-end gap-x-[25px] relative">
                            <div className="flex gap-x-[7px]" onClick={()=>setInfo(!info)}>
                                <FaUser className='text-[#262626] cursor-pointer' />
                                <IoMdArrowDropdown className='text-[#262626] cursor-pointer ' />
                            </div>
                            <div className="absolute top-[30px] right-[50px] z-10">
                                <ul className={`duration-300 ease-in-out ${info==true ? "": "opacity-0"}`}>
                                    <li ><a className='bg-black text-[14px] font-dm font-bold text-white inline-block py-[15px] px-[58px]' href="#">My Account</a></li>
                                    <li><a className='bg-[#F5F5F3] text-[14px] font-dm font-bold text-[#262626] inline-block py-[15px] pl-[72px] pr-[71px]' href="#">Log Out</a></li>
                                </ul>
                            </div>
                            <div className="relative duration-1000 ease-in-out ">
                                <IoCart className="text-[#262626]   cursor-pointer" onClick={()=>setOut(!out)} />
                                <div className={` absolute  w-[360px] top-[35px] left-[-343px]  border-1 border-[#979797]  ${out==true ? " " : "hidden"}` }>
                                  
                                    <div className="flex items-center  bg-[#979797]">
                                        <div className="h-[80px] w-[80px] m-[20px] bg-[#D8D8D8]">
                                            
                                        </div>
                                        <div className="">
                                            <h4 className='text-[14px]'>Black Smart Watch</h4>
                                            <a href="#">$44.00</a>
                                        </div>
                                        <div className="pl-[88px]" onClick={()=>setOut(false)}>
                                               
                                             <RxCross2 className='cursor-pointer'/>
                                        </div>
                                        
                                    </div>
                                    <div className="p-[20px] ">
                                        <h4 className='pb-[13px]'>Subtotal: $44.00</h4>
                                        <a href="#" className='py-[16px] text-[14px] font-bold font-dm px-[41px] inline-block border-2 border-[#2B2B2B] text-black'>View Cart</a>
                                        <a href="#" className='py-[17px] ml-[21px] text-[14px] font-bold font-dm px-[41px] inline-block  bg-[#262626] text-white'>Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>







    )
}

export default Navbar