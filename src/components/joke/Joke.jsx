import { useUI } from '../../context/UIContext'
import './Joke.css'

const jokes_es = [
    '¿Por qué los programadores confunden Halloween y Navidad? Porque OCT 31 == DEC 25',
    'No es un bug, es una feature no documentada',
    'Programar es como escribir un libro… pero si te equivocas en una coma, no compila',
    'Hay 10 tipos de personas: las que entienden binario y las que no',
    'Funciona en mi máquina'
]

const jokes_en = [
    'Why do programmers confuse Halloween and Christmas? Because OCT 31 == DEC 25',
    "It's not a bug, it's an undocumented feature",
    "Programming is like writing a book... but if you miss a single comma, it won't compile",
    'There are 10 types of people: those who understand binary and those who don’t',
    'It works on my machine'
]

const jokes_cat = [
    'Per què els programadors confonen Halloween i Nadal? Perquè OCT 31 == DEC 25',
    "No és un bug, és una feature no documentada",
    "Programar és com escriure un llibre... però si t'equivoques en una coma, no compila",
    "Hi ha 10 tipus de persones: les que entenen binari i les que no",
    'Funciona a la meva màquina'
]

const jokes_traduced = {
    ES: jokes_es,
    EN: jokes_en,
    CAT: jokes_cat
}

const mathRandom = Math.random()

export default function Joke() {
    const { lang } = useUI()
    let jokes = jokes_traduced[lang] || jokes_traduced['ES']  
    const joke = jokes[Math.floor(mathRandom * jokes.length)]
    return <blockquote className="joke">“{joke}”</blockquote>
}