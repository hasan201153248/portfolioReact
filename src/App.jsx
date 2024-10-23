import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import MyWork from "./Components/MyWork/MyWork"
import NavBar from "./Components/NavBar/NavBar"
import Services from "./Components/Services/Services"


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
