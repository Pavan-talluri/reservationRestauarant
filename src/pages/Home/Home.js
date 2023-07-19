import React from 'react'
import Cuisinelist from '../../components/cuisinelist/Cuisinelist'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Mail from '../../components/mailList/Mail'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header />
        <div className='homeContainer'>
            <Featured />
            <h1 className='homeTitle'>Browse by cuisine</h1>
            <Cuisinelist />
            <Mail />
            <Footer/>
        </div>
    </div>
  )
}

export default Home