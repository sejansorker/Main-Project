import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sele from '../components/Sele'
import New from '../components/New'
import NewEx from '../components/NewEx'
import Clock from '../components/Clock'
import Special from '../components/Special'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      
      <Banner/>
      <Sele/>
       <New/>
       <NewEx/>
       <Clock/>
       <Special/>
      
    </div>
  )
}

export default Home