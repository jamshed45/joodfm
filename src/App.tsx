import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
