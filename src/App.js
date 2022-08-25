
// import ItemCount from "./components/ItemCount";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import 'boxicons';
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";
import Orders from "./components/Orders";




function App() {
  
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route index path="/" element={<ItemListContainer />}></Route>
      <Route path="/category/:name" element={<ItemListContainer />}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes> 
    </CartProvider>
    </BrowserRouter>
    </>
    
  )
}

export default App;
