// Estilo Global
import './index.css'

// Componentes da UI
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { ScrollDown, ScrollDownTwo } from "./components/scrolldown/ScrollDown"
import Welcome from "./pages/welcome/Welcome"
import About from "./pages/about/About"
import Tools from "./pages/tools/Tools"
import Contacts from "./pages/contacts/Contacts"
import Projects from "./pages/projects/Projects"
import OtherProjects from "./pages/other-projects/OtherProjects"

// Hooks e Estado
import { useState } from 'react'

export default function Layout () {

    const [idioma, setIdioma] = useState("pt")

    return (<>
        <Header idioma={idioma} setIdioma={setIdioma} />
        <main>
            <Welcome idioma={idioma}/>
            <ScrollDown idioma={idioma}/>
            <About idioma={idioma}/>
            <ScrollDownTwo idioma={idioma}/>
            <Tools idioma={idioma}/>
            <Projects />
            <OtherProjects />
            <Contacts/>
        </main>
        <Footer/>
    </>)
}