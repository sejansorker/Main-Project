import React, { useState } from 'react'
import Container from '../components/Container'

import { Link } from 'react-router-dom'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { FiPlus } from 'react-icons/fi'
import { TiMinus } from 'react-icons/ti'
import { HiSquares2X2 } from 'react-icons/hi2'
import { FaHeart, FaShoppingCart, FaThList } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
import Cup from "../assets/cup.png"
import Cup1 from "../assets/cup1.png"
import Cup2 from "../assets/cup2.png"
import Cup3 from "../assets/cup3.png"
import Cup4 from "../assets/cup-4.png"
import Cup5 from "../assets/cup5.png"
import Cup6 from "../assets/cup6.png"
import Cup7 from "../assets/cup7.png"
import Cup8 from "../assets/cup8.png"
import Cup9 from "../assets/cup9.png"
import Cup10 from "../assets/cup10.png"
import Cup11 from "../assets/cup11.png"

const Shop = () => {
    let [cateShow, SetcateShow] = useState(false)
    let [cateShowOne, SetcateShowOne] = useState(false)
    let [cateShowTwo, SetcateShowTwo] = useState(false)
    let [cateShowThree, SetcateShowThree] = useState(false)
    let [cateShowFour, SetcateShowFour] = useState(false)
    let [cateShowFive, SetcateShowFive] = useState(false)
    let [letShow, SetLatShow] = useState(false)
    let [letShowOne, SetLatShowOne] = useState(false)
    let [letShowThree, SetLatShowThree] = useState(false)
    return (
        <div>
            <Container>
                <div className="w-2/12 py-[100px]">
                    <div className="">
                        <h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Products</h2>
                    </div>
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <Link to={"/"} class="inline-flex items-center text-sm font-medium text-[#767676] hover:text-[#000] dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" class="ms-1 text-sm font-medium text-[#767676] hover:text-[#000] md:ms-2 dark:text-gray-400 dark:hover:text-white">Shop</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>

                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="flex">
                    <div className="w-3/12 pb-[130px]">
                        <div className="">
                            <h4 onClick={(() => SetcateShow(!cateShow))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Category {cateShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {cateShow &&

                                <ul className='mb-[50px]'>
                                    <li onClick={(() => SetcateShowOne(!cateShowOne))} className={`text-[#767676] text-[16px] font-dm font-bold  py-[19px]  border-b-1 border-[#D8D8D8] ${cateShowOne ? "border-none" : ""}`}>
                                        <div className="flex justify-between  items-center">
                                            Category 1 {cateShowOne ? <TiMinus /> : <FiPlus />}
                                        </div>
                                    </li>
                                    {cateShowOne &&
                                        <div className="mb-[10px]">
                                            <ul>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 1.1</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 1.2</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 1.3</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 1.4</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 1.5</li>
                                            </ul>
                                        </div>
                                    }
                                    <li onClick={(() => SetcateShowTwo(!cateShowTwo))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowTwo ? "border-none" : ""}`}>Category 2
                                        {cateShowTwo ? <TiMinus /> : <FiPlus />}
                                    </li>
                                    {cateShowTwo &&
                                        <div className="mb-[10px]">
                                            <ul>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 2.1</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 2.2</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 2.3</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 2.4</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 2.5</li>
                                            </ul>
                                        </div>
                                    }
                                    <li onClick={(() => SetcateShowThree(!cateShowThree))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowThree ? "border-none" : ""}`}>Category 3
                                        {cateShowThree ? <TiMinus /> : <FiPlus />}
                                    </li>
                                    {cateShowThree &&
                                        <div className="mb-[10px]">
                                            <ul>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 3.1</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 3.2</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 3.3</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 3.4</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 3.5</li>
                                            </ul>
                                        </div>
                                    }
                                    <li onClick={(() => SetcateShowFour(!cateShowFour))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowFour ? "border-none" : ""}`}>Category 4
                                        {cateShowFour ? <TiMinus /> : <FiPlus />}
                                    </li>
                                    {cateShowFour &&
                                        <div className="mb-[10px]">
                                            <ul>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.1</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.2</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.3</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.4</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.5</li>
                                            </ul>
                                        </div>
                                    }
                                    <li onClick={(() => SetcateShowFive(!cateShowFive))} className={`text-[#767676] flex justify-between items-center text-[16px] font-dm font-bold  py-[19px] border-b-1 border-[#D8D8D8] ${cateShowFive ? "border-none" : ""}`}>Category 5
                                        {cateShowFive ? <TiMinus /> : <FiPlus />}
                                    </li>
                                    {cateShowFive &&
                                        <div className="mb-[20px]">
                                            <ul>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.1</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.2</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.3</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.4</li>
                                                <li className='text-[#767676] text-[14px] py-[10px] border-b-1 border-[#D8D8D8] font-dm'>Category 4.5</li>
                                            </ul>
                                        </div>
                                    }




                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => SetLatShow(!letShow))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Color {letShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {letShow &&

                                <ul className='mb-[50px]'>
                                    <li className='text-[#767676] text-[16px] font-dm pb-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#000] rounded-full'></div>
                                        Color 1
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#FF8686] rounded-full'></div>
                                        Color 2
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#7ED321] rounded-full'></div>
                                        Color 3
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#B6B6B6] rounded-full'></div>
                                        Color 4
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] flex items-center gap-[10px] border-b-1 border-[#D8D8D8] font-bold'>
                                        <div className='h-[11px] w-[11px] bg-[#15CBA5] rounded-full'></div>
                                        Color 5
                                    </li>
                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => SetLatShowOne(!letShowOne))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Brand {letShowOne ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {letShowOne &&

                                <ul className='mb-[50px]'>
                                    <li className='text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand 1
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand 2
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand  3
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand  4
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        Brand 5
                                    </li>
                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => SetLatShowThree(!letShowThree))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[30px]'>Shop by Price {letShowThree ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {letShowThree &&

                                <ul>
                                    <li className='text-[#767676] text-[16px] font-dm pb-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $0.00 - $9.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $10.00 - $19.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $20.00 - $29.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $30.00 - $39.99
                                    </li>
                                    <li className='text-[#767676] text-[16px] font-dm py-[19px] border-b-1 border-[#D8D8D8] font-bold'>
                                        $40.00 - $69.99
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className="w-9/12 pl-[40px] ">
                        <div className="flex pb-[60px]">
                            <div className="flex gap-[12px] ">
                                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]">
                                    <HiSquares2X2 />
                                </div>
                                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]">
                                    <FaThList />
                                </div>
                            </div>
                            <div className="flex pl-[280px] pr-[40px]">
                                <h4 class="pt-[6px] pr-[10px]">Sort by:</h4>
                                <form class="w-[239px]">

                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">

                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </form>

                            </div>
                            <div className="flex">
                                <h4 class="pt-[5px] pr-[10px]">Show:</h4>
                                <form class="w-[139px]">

                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">

                                        <option>36</option>
                                        <option>38</option>
                                        <option>40</option>
                                        <option>42</option>
                                    </select>
                                </form>

                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup1} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup2} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup3} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup4} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup5} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup6} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup7} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup8} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup9} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup10} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="w-[31%] pb-[50px] ">
                                <div className="  relative group">
                                    <div className="bg-[#F9F9F9]">
                                        <img src={Cup} alt="" />
                                    </div>
                                    <div className="bg-white pr-[20px] absolute bottom-0 right-0 w-full h-[0] z-100 overflow-hidden   group-hover:h-[150px] duration-500 ease-in-out">
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
                                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>Basic Crew Neck Tee</h4>
                                        <p className='text-[14px] font-dm font-normal text-[#767676]'>$44.00</p>
                                    </div>
                                    <h1 className='text-[16px] font-dm font-normal text-[#767676]'>Black</h1>
                                </div>
                            </div>
                            <div className="flex items-center pb-[60px]">
                                <nav aria-label="Page navigation example">
                                    <ul class="flex items-center -space-x-px h-10 text-base">
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Previous</span>
                                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                        </li>
                                        <li>
                                            <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Next</span>
                                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <h4 className='pl-[410px]'>Products from 1 to 12 of 80</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>


        </div>
    )
}

export default Shop