import React from 'react'
import Container from './Container'
import One from "../assets/one.png"
import Two from "../assets/two.png"
import Three from "../assets/three.png"

const Sele = () => {
  return (
    <div className='lg:py-[100px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[49%]">
                    <img src={One} alt="" />
                </div>
                <div className="w-[49%]">
                    <div className="">
                        <img src={Two} alt="" />
                    </div>
                    <div className="pt-[33px]">
                        <img src={Three} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Sele