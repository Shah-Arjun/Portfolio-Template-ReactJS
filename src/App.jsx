import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <div>
      <Navbar />              {/*   mounting navbar */}
      <Hero />              {/*   mounting hero */}
    </div>
  )
}

export default App