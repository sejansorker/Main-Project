import React, { useContext, useState } from 'react'
import Container from '../components/Container'

import BBB from "../assets/ccc.png"
import CCC from "../assets/bbb.png"
import { Link } from 'react-router-dom'
const About = () => {



  return (
    <div>
      <Container>
        <div className="w-2/12 py-[100px]">
          <div className="">
            <h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Abouts</h2>
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
        <div className=""></div>
        <div className="w-full flex items-center justify-between pb-25">
          <img src={BBB} className='w-[48%] cursor-pointer' alt="" />
          <img src={CCC} className='w-[48%] cursor-pointer' alt="" />
        </div>
        <div className="w-full ">
          <h2 className='text-[37px] pb-25 text-[#262626] font-dm font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>        
          </div>
          <div className="w-full flex pb-25 justify-between">
             <div className="w-[32%]">
              <h3 className='text-[25px] pb-3 text-[#262626] font-dm font-bold'>Our Vision</h3>
              <p className='text-[16px] pb-2 text-[#767676] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
             </div>
             <div className="w-[32%]">
              <h3 className='text-[25px] pb-3 text-[#262626] font-dm font-bold'>Our Story</h3>
              <p className='text-[16px] pb-2 text-[#767676] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
             </div>
             <div className="w-[32%]">
              <h3 className='text-[25px] pb-3 text-[#262626] font-dm font-bold'>Our Brands</h3>
              <p className='text-[16px] pb-2 text-[#767676] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
             </div>
          </div>

      </Container>
    </div>
  )
}

export default About