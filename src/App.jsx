import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Abotu from './Components/About/About'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

function App() {
  return (
    <div>
      <Navbar />              {/*   mounting navbar */}
      <Hero />              {/*   mounting hero section */}
      <About />              {/*   mounting about section */}
      <Services />              {/*   mounting Services section */}
      <MyWork />              {/*   mounting MyWork section */}
    </div>
  )
}

export default App