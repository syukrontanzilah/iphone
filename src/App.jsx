import { 
  Hero, 
  Highlights, 
  Model, 
  Navbar 
} from "./components"
import { appleImg, heroImg, watchImg } from "./utils"

const App = () => {

  return (
  <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
  </main>
  
  )
}

export default App
