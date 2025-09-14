import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import About from "./pages/About"
import Error from "./pages/Error"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Contect from "./pages/Contect"

let router = createBrowserRouter(createRoutesFromChildren(
  
  <>
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductDetails/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contect" element={<Contect/>}></Route>
  </Route>
    <Route path="*" element={<Error/>}></Route>
  </>
))
function App() {
 
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  )
}

export default App
