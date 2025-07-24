import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutUsPage from "./pages/AboutUsPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index Component={HomePage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/aboutus" Component={AboutUsPage} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
