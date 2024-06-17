import React from 'react'
import Navbar from './composants/Navbar'
import Profil from './composants/Profil'
import PSection from './composants/PSection'
import SSection from './composants/SSection'
import Moi from './composants/Moi'
import Mailto from './composants/Mailto'
import Footer from './composants/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Profil/>
    <PSection/>
    <Moi/>
    <SSection/>
    <Mailto/>
    <Footer/>
    </>
  )
}

export default App
