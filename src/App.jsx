import { Hero, Highlights, Navbar } from "./components"
import { appleImg, heroImg, watchImg } from "./utils"

const App = () => {

  return (
  <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
    
  </main>
  
  )
}

export default App
