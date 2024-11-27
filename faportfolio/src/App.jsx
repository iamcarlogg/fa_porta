  import HomeScreen from "./components/HomeScreen/HomeScreen"
  import { BrowserRouter, Route, Routes } from "react-router-dom"
  import Navbar from "./components/Navbar/Navbar"
  import Footer from "./components/footer/footer"
  import Editorial from "./components/proyectos/Editorial"
  import Publicitario from "./components/proyectos/Publicitario"
  import Ilustracion from "./components/proyectos/Ilustracion"
  import Contact from "./components/contact/contact"
  import AboutMe from "./components/aboutMe/AboutMe"
  import Fovialito from "./components/proyectCarousel/Fovialito"
import Eleonor from "./components/proyectCarousel/Eleonor"



  function App() {


    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/editorial" element={<Editorial/>}/>
          <Route path="/publicitario" element={<Publicitario/>}/>
          <Route path="/ilustracion" element={<Ilustracion/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/fovialito" element={<Fovialito/>}/>
          <Route path="/eleonor" element={<Eleonor/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>

        
      </>
    )
  }

  export default App
