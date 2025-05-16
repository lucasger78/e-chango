import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { ProductProvider } from "./context/ProductProvider";
import { CartPage } from "./pages/CartPage"
import { CartProvider } from "./context/CartProvider";

export const EchangoApp = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBarComponent/>
          <div className="container">
              <Routes>
                  <Route path='/' element={<ProductsPage/>}></Route>
                  <Route path='/e-chango' element={<CartPage/>}></Route>
                  <Route path='/*' element={<Navigate to='/' />}></Route>

              </Routes>

          </div>
        </CartProvider>
    </ProductProvider>
  )
}
