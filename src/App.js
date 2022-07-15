
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Mundo" />
      <ItemCount stock={5} initial={1} />
    </>
    
  )
}

export default App;
