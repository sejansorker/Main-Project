import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'

import { Link } from 'react-router-dom'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { FiPlus } from 'react-icons/fi'
import { TiMinus } from 'react-icons/ti'
import { HiSquares2X2 } from 'react-icons/hi2'
import { FaHeart, FaShoppingCart, FaThList } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'

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
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import { ApiProduct } from '../components/ContextApi'

const Shop = () => {
    let {info} = useContext(ApiProduct)
    let [cateShow, setCateShow] = useState(false)
    let [cateShowOne, setCateShowOne] = useState(false)
    let [cateShowTwo, setCateShowTwo] = useState(false)
    let [cateShowThree, setCateShowThree] = useState(false)
    let [cateShowFour, setCateShowFour] = useState(false)
    let [cateShowFive, setCateShowFive] = useState(false)
    let [letShow, setLatShow] = useState(false)
    let [letShowOne, setLatShowOne] = useState(false)
    let [letShowThree, setLatShowThree] = useState(false)
    let [cateFilter, setCateFilter] = useState([])
    let [category, setCategory] = useState([])
    let [active, setActive] = useState([])
    let handleCategory = (citem)=>{
          let cateFilter = info.filter((item)=>item.category == citem)
          setCateFilter(cateFilter);
          
    }
    let handlelist= ()=>{
        setActive(false)
    }
   
    let [perPage, setPerPage] = useState(6)
    let [currentPage, setCurrentPage] = useState(1)
    let lastPage = perPage * currentPage;
    let firstPage = lastPage - perPage
    let allData = info.slice(firstPage, lastPage)
    let pageNumber = [];
    for(let i = 0 ; i < Math.ceil(info.length / perPage); i++ ){
        pageNumber.push(i)
    }
    let paginate = (index)=>{
       setCurrentPage(index + 1)
    }
    useEffect(()=>{
          setCategory([ ...new Set(info.map((item)=>item.category))])
    },[info])
    return (
        <div>
            <Container>
                <div className="w-2/12 py-[100px]">
                    <div className="">
                        <h2 className='font-dm font-bold pb-[10px] text-[#262626] text-[49px]'>Products</h2>
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
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" className="ms-1 text-sm font-medium text-[#767676] hover:text-[#000] md:ms-2 dark:text-gray-400 dark:hover:text-white">Shop</a>
                                </div>
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
                <div className="flex">
                    <div className="w-3/12 pb-[130px]">
                        <div className="">
                            <h4 onClick={(() => setCateShow(!cateShow))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[20px]'>Shop by Category {cateShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
                            {cateShow &&
                                <ul className='mb-[10px]'>
                                    {category.map((item)=>(

                                    <li onClick={()=>handleCategory(item)} className={`text-[#767676] text-[16px] font-dm font-bold  py-[10px]`}>
                                        <p className='capitalize '> {item}</p>
                                    </li>
                                    ))}
                                </ul>
                            }
                        </div>
                        <div className="">
                            <h4 onClick={(() => setLatShow(!letShow))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[20px]'>Shop by Color {letShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
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
                            <h4 onClick={(() => setLatShowOne(!letShowOne))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[20px]'>Shop by Brand {letShowOne ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
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
                            <h4 onClick={(() => setLatShowThree(!letShowThree))} className='flex justify-between items-center font-dm font-bold text-[20px] text-[#262626] pb-[20px]'>Shop by Price {letShowThree ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</h4>
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
                                <div className="h-[36px] w-[36px] flex justify-center items-center hover:text-white bg-white hover:bg-[#000]" onClick={handlelist}>
                                    <FaThList />
                                </div>
                            </div>
                            <div className="flex pl-[440px] pr-[40px]">
                                <h4 className="pt-[6px] pr-[10px]">Sort by:</h4>
                                <form className="w-[239px]">
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </form>
                            </div>
                            <div className="flex">
                                <h4 className="pt-[5px] pr-[10px]">Show:</h4>
                                <form className="w-[139px]">
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                                        <option>36</option>
                                        <option>38</option>
                                        <option>40</option>
                                        <option>42</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div >
                                    <Page allData={allData} cateFilter={cateFilter} active={active}/>
                            <Pagination pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} perPage={perPage} firstPage={firstPage} lastPage={lastPage} info={info} cateFilter={cateFilter}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Shop