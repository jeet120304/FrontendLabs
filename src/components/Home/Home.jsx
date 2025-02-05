import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Questions from '../questions/Questions'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <h1>hero section</h1>
        <About/>
        <Questions/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home