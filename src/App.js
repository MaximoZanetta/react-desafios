
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";



function App() {
  function add(counter){
    alert(`Se agregaron ${counter} al carrito de compras`);
  }
  return (
    <>
      <NavBar />
      <ItemListContainer  />
      <ItemCount stock={5} initial={1} onAdd={add} />
    </>
    
  )
}

export default App;
