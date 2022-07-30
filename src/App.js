
// import ItemCount from "./components/ItemCount";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import 'boxicons';
import Models from "./components/Models";
import CartProvider from "./components/CartContext";




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
    </Routes> 
    </CartProvider>
    </BrowserRouter>
    </>
    
  )
}

export default App;
