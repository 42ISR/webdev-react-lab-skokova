import { useState } from 'react'
import Header from './Components/Header'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Testimonials from './Components/Testimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Courses />
    <Hero />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
