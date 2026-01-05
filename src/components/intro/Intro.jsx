import { useUI } from '../../context/UIContext'
import './Intro.css'

export default function Intro() {
    const { lang } = useUI()
    
    const hello_text = {
        ES: "Hola, soy Jordi",
        EN: "Hello, I'm Jordi",
        CAT: "Hola, soc en Jordi",
    }

    const description_text = {
        ES: "Soy desarrollador back-end apasionado por este mundo. Me encanta investigar nuevas tecnologías, aprender constantemente y aplicar soluciones eficientes. Disfruto resolviendo problemas complejos, optimizar el rendimiento y construir sistemas robustos y mantenibles.",
        EN: "I am a back-end developer passionate about this world. I love researching new technologies, constantly learning, and applying efficient solutions. I enjoy solving complex problems, optimizing performance, and building robust and maintainable systems.",
        CAT: "Soc desenvolupador back-end apassionat per aquest món. M'encanta investigar noves tecnologies, aprendre constantment i aplicar solucions eficients. Gaudeixo resolent problemes complexos, optimitzant el rendiment i construint sistemes robustos i sostenibles.",
    }

    return (
        <div className="intro">
            <h1>{hello_text[lang]}</h1>
            <p>
                {description_text[lang]}
            </p>
        </div>
    )
}