import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sele from '../components/Sele'
import New from '../components/New'


const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Sele/>
       <New/>
    </div>
  )
}

export default Home