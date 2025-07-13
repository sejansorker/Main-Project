import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { RxCross2 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  let [show, setShow] = useState(false)
  return (
    <Container>
        <div className={`lg:flex py-[20px]`}>
        <div className="w-1/3">
          <div className="">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <div className="">
            <ul className={`lg:flex gap-x-10 lg:py-0 py-[10px]  lg:text-start text-center duration-500 ease-in-out ${show == true ? " bg-[rgba(120,185,181,0.33)] lg:mt-0 mt-3" : " lg:mt-0 mt-[-170px]"}`}>
              <li><a href="#" className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Home</a></li>
              <li><a href="#" className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Shop</a></li>
              <li><a href="#" className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>About</a></li>
              <li><a href="#" className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Contacts</a></li>
              <li><a href="#" className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Journal</a></li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden absolute top-[20px] right-[10px]" onClick={() => setShow(!show)}>
          {show ? <RxCross2 /> : <FaBars />}
        </div>
    </div>
      </Container>
  )
}

export default Header