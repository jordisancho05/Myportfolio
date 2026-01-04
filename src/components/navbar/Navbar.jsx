import { Link } from 'react-router-dom'
import { useUI } from '../../context/UIContext'
import './Navbar.css'

export default function Navbar() {
    const { theme, setTheme, lang, setLang } = useUI()

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    const name_home = {
        ES: "Inicio",
        EN: "Home",
        CAT: "Inici",
    }

    const name_about = {
        ES: "Sobre mí",
        EN: "About me",
        CAT: "Sobre mi",
    }

    const name_projects = {
        ES: "Proyectos",
        EN: "Projects",
        CAT: "Projectes",
    }

    const name_download_cv = {
        ES: "Descargar CV",
        EN: "Download CV",
        CAT: "Descarregar CV",
    }
    
    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <Link to="/">{name_home[lang]}</Link>
                <Link to="/about">{name_about[lang]}</Link>
                <Link to="/proyectos">{name_projects[lang]}</Link>
            </div>
            <div className='navbar-right'>
                <button className="btn cv">
                    {name_download_cv[lang]}
                </button>
                <button className="btn theme" onClick={toggleTheme}>
                    {theme === "light" ? "☀️" : "🌙"}
                </button>
                <select className='langs' value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="CAT">CAT</option>
                    <option value="ES">ES</option>
                    <option value="EN">EN</option>
                </select>
            </div>
        </nav>
    )
}