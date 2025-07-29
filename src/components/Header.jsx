import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { RxCross2 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  let [show, setShow] = useState(false)
  return (
        <div className={` sticky py-[20px]  top-0  z-1000 bg-[#FFFFFF]`}>
        <Container>
        <div className="lg:flex ">
          <div className="w-1/3">
          <div className="">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="lg:w-2/3 w-full overflow-hidden">
          <div className="">
            <ul className={`lg:flex gap-x-10 lg:py-0 py-[10px]  lg:text-start text-center duration-500 ease-in-out ${show == true ? " bg-[rgba(120,185,181,0.33)] lg:mt-0 mt-3" : "  lg:mt-0 mt-[-190px]"}`}>
              <li><Link to={"/"} className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Home</Link></li>
              <li><Link to={"/shop"} className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Shop</Link></li>
              <li><Link to={"/*"} className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>About</Link></li>
              <li><Link to={"/*"} className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Contacts</Link></li>
              <li><Link to={"/*"} className='font-dm text-[#767676] font-normal text-[14px] hover:text-[#262626]'>Journal</Link></li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden absolute top-[20px] right-[10px]" onClick={() => setShow(!show)}>
          {show ? <RxCross2 className='cursor-pointer'/> : <FaBars className='cursor-pointer'/>}
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Header