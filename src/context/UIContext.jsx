import { createContext, useContext, useEffect, useState } from "react"

const UIContext = createContext()

export function UIProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "ES"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang.toLowerCase())
    localStorage.setItem("lang", lang)
  }, [lang])

  return (
    <UIContext.Provider
      value={{
        theme,
        setTheme,
        lang,
        setLang,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  return useContext(UIContext)
}
