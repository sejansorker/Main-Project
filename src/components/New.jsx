import React, { useContext } from 'react'
import Container from '../components/Container'
import Four from "../assets/four.png"
import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'
import { ApiProduct } from './ContextApi'
import Slider from 'react-slick'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div className='h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] hover:text-black cursor-pointer z-10 text-white absolute top-[115px] right-0 rounded-full flex justify-center items-center'
      onClick={onClick}
    > <FaLongArrowAltRight /></div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div className='h-[64px] w-[64px] bg-[rgba(151,151,151,0.53)] hover:bg-[#979797] hover:text-black cursor-pointer z-10 text-white absolute top-[115px] left-0 rounded-full flex justify-center items-center' onClick={onClick}
    ><FaLongArrowAltLeft /> </div>
  );
}
const New = () => {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
    let data =useContext(ApiProduct)
    
    
  return (
    <div>
         <Container>
            <div className="">
                <h3 className='font-dm font-bold text-[39px] pb-[40px] text-[#262626]'>New Arrivals</h3>
            </div>
           <Slider {...settings} >
                 {data.map((item,index)=>(
                 <div key={index} className="!w-[96%]">
                <div className="relative group ">
                     <div className="">
                    <img src={item.thumbnail} alt="" />
                 </div>
                 <div className="bg-white pr-[20px] h-[0] z-100 overflow-hidden group-hover:h-[150px] duration-500 ease-in-out absolute bottom-0 right-0 w-full">
                    <ul>
                        <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pt-[25px] gap-[15px]'>Add to Wish List <FaHeart /></li>
                        <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end py-[20px] gap-[15px]'>Compare <IoGitCompare /></li>
                        <li className='flex items-center text-[#767676] hover:text-[#262626] cursor-pointer text-[16px] font-bold font-dm  justify-end pb-[25px] gap-[15px]'>Add to Cart <FaShoppingCart /></li>
                    </ul>
                 </div>
                </div>
                 <div className="">
                      <div className="flex items-center justify-between pt-[24px] pb-[15px]">
                        <h4 className='text-[18px] font-dm font-bold text-[#262626]'>{item.title}</h4>
                      <p className='text-[14px] font-dm font-normal text-[#767676]'>${item.price}</p>
                      </div>
                      <h4 className='text-[16px] font-dm font-normal text-[#767676]'>{item.brand}</h4>
                 </div>
            </div>
            ))}
           </Slider>
        </Container>
    </div>
  )
}

export default New