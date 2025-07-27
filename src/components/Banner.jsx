import React from 'react'
import Baaan from "../assets/banner.png"
import Slider from 'react-slick';
import Container from './Container'
import { PiNumberTwoBold } from 'react-icons/pi';
import { FaTruck, FaUndo } from 'react-icons/fa';

const Bannner = () => {
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          padding: "10px",
          position:"absolute",
          left:"9%",
          top:"50%",
          transform:"translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px", } }> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "2px white solid",
          padding:"5px 0",
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
  <>
   < Slider {...settings}>
   <div className=""><img src={Baaan} alt="" /></div>
  <div className=""><img src={Baaan}  alt="" /></div>
  <div className=""><img src={Baaan} alt="" /></div>
   </Slider>
   <div className="py-[25px] border-b-2 border-[#F0F0F0]">
  <Container>
    <div className="flex justify-between ">
      <div className="w-2/12">
      <div className="flex items-center gap-[10px]">
        <PiNumberTwoBold className='text-[20px] text-[#262626]' />
        <p className='text-[#6D6D6D] text-[16px] font-dm font-bold'>Two years warranty</p>
      </div>
      </div>
      <div className="w-2/12">
      <div className="flex items-center justify-center gap-[10px]">
        <FaTruck  className='text-[20px] text-[#262626]'/>
        <p className='text-[#6D6D6D] text-[16px] font-dm font-bold'>Free shipping</p>
      </div>
      </div>
      <div className="w-2/12">
      <div className="flex items-center  gap-[8px]">
        <FaUndo  className='text-[18px] text-[#262626]'/>
        <p className='text-[#6D6D6D] text-[16px] font-dm font-bold'>Return policy in 30 days</p>
      </div>
      </div>
    </div>
  </Container>
   </div>
   </>
  )
}

export default Bannner