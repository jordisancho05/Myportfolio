import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Proyectos from './pages/proyectos/Proyectos'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />

      <div className='content'>
        <Routes>
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}
export default App
