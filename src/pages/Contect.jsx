import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Map from "../assets/map.png"
const Contect = () => {
    return (
        <div className='pb-25'>
            <Container>
                <div className="w-2/12 py-[100px]">
                    <div className="">
                        <h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Contects</h2>
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
                <div className="w-1/2 pb-25">
                    <form action="">
                        <h4 className='mb-10 text-[20px]   font-bold text-[#262626] font-dm'>Fill up a Form</h4>
                        <label htmlFor="" className='text-[14px]   font-bold text-[#262626] font-dm'>Name</label>
                        <input type="text" className='w-full text-[14px]   font-normol text-[#767676] font-dm pt-2.5 pb-4 focus:outline-0 border-b-2 border-[#F0F0F0]' placeholder='Your name here' />
                        <label htmlFor="" className='mt-[23px] inline-block'>Email</label>
                        <input type="text" className='w-full text-[14px]   font-normol text-[#767676] font-dm pt-2.5 pb-4 focus:outline-0 border-b-2 border-[#F0F0F0]' placeholder='Your email here' />
                        <label htmlFor="" className='mt-[23px] inline-block'>Message</label>
                        <input type="text" className='w-full text-[14px]   font-normol text-[#767676] font-dm pt-2.5 pb-10 focus:outline-0 border-b-2 border-[#F0F0F0]' placeholder='Your message here' />
                        <p className='text-[14px] py-4 px-21 font-bold text-[#262626] font-dm  hover:text-white hover:bg-black duration-300 ease-in-out w-fit mt-5 border-2 border-[#262626]'>Post </p>
                    </form>
                </div>
                <div className="">
                    <img src={Map} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Contect