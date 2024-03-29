
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home  from "./pages/Home" 
import Store  from "./pages/Store"
import About from "./pages/About"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
function App() {

  return (
    <ShoppingCartProvider>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<About />} />
  </Routes>,
    </ShoppingCartProvider>
  )
}

export default App
