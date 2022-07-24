
// import ItemCount from "./components/ItemCount";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";




function App() {
  
  return (
    <>
    <BrowserRouter>
      <Link to="/"><NavBar /> </Link> 
    <Routes>
      <Route index path="/" element={<ItemListContainer />}></Route>
      <Route exact path="/category/:id" element={<ItemListContainer />}></Route>
      <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
    </BrowserRouter>
      {/* <ItemListContainer  /> */}
      {/* <ItemCount stock={5} initial={1} onAdd={add} /> */}
      {/* <ItemDetailContainer /> */}
    </>
    
  )
}

export default App;
