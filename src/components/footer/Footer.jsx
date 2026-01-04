import Mail from "lucide-react/dist/esm/icons/mail"
import GithubIcon from "lucide-react/dist/esm/icons/github"
import LinkedinIcon from "lucide-react/dist/esm/icons/linkedin"
import { useUI } from "../../context/UIContext"
import './Footer.css'

export default function Footer() {
  const { lang } = useUI()

  const text = {
    ES: "Todos los derechos reservados",
    EN: "All rights reserved",
    CAT: "Tots els drets reservats",
  }

  return (
    <footer className="footer">
      <span className="copyright">
        © {new Date().getFullYear()} · {text[lang]}
      </span>

      <div className="footer-icons">
        <a href="mailto:jordisancho05@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/jordi-sancho-garcia-b25ba9295/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} />
        </a>

        <a
          href="https://github.com/jordisancho05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
      </div>
    </footer>
  )
}