import React from 'react'
import Container from './Container'
import Sejan from "../assets/sejan.png"
const Clock = () => {
  return (
    <div>
        <Container>
            <div className="w-full pb-[100px]">
                <img src={Sejan} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Clock