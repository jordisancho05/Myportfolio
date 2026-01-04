import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Proyectos from './Pages/Proyectos/Proyectos.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

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
