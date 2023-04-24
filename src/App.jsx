import './App.css'
import Aboutme from './components/Aboutme'
import AppNavbar from './components/AppNavbar'
import Contactme from './components/Contacme'
import Cv from './components/Cv'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WaveComponents from './components/WaveComponents'



function App() { 

return (
  <>
    <AppNavbar />
    <Home/>
    <WaveComponents />
    <Aboutme/>
    <Skills />
    <Projects />
    <Contactme />
    <Cv/>
    <Footer />
    </>
    )
}

    export default App
