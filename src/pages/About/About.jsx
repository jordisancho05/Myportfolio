import { useUI } from '../../context/UIContext'
import './About.css'


export default function About() {
    const { lang } = useUI()

    const in_process = {
        ES: "En proceso de desarrollo",
        EN: "Under development",
        CAT: "En procés de desenvolupament",
    }

    return (
        <main className="about">
            <h1>{in_process[lang]}</h1>
        </main>
    )
}