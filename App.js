import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const[darkMode, setDarkMode] = React.useState(true)
    
    function handleChange() {
        setDarkMode(prev => !prev)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={handleChange} />
            <Main darkMode={darkMode} />
        </div>
    )
}