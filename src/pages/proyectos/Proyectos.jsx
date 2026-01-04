import { useUI } from '../../context/UIContext'
import './Proyectos.css'


export default function Proyectos() {
    const { lang } = useUI()

    const name_projects = {
        ES: "En proceso de desarrollo",
        EN: "Under development",
        CAT: "En procés de desenvolupament",
    }

    return (
        <main className="proyectos">
            <h1>{name_projects[lang]}</h1>
        </main>
    )
}