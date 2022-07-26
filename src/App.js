
// import ItemCount from "./components/ItemCount";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import 'boxicons';




function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index path="/" element={<ItemListContainer />}></Route>
      <Route path="/category/:name" element={<ItemListContainer />}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes> 
    </BrowserRouter>
    </>
    
  )
}

export default App;
