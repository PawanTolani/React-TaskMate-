import { useEffect } from "react";
import { useState } from "react"
import Logo from "../assets/logo.png"

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "BL");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Task To Do</span>
        </div>
        <div className="themes">
            <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("BL")} className={ theme === "BL" ? "BL activeTheme" : "BL"}></span>
        </div>
    </header>
  )
}