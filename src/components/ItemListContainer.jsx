import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "../data"
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const ItemListContainer = () => {
  
      const { name } = useParams()
      const [items, setItems]= useState([])
      const [loading, setLoading] = useState(false)

      const promise = new Promise((resolve)=>{
        setTimeout(
          ()=>{
              resolve(data)
          },2000)
      })
      

      useEffect(()=>{
      setLoading(true)
      promise.then((res)=> {
        const products = res;
        if(name) {
              setItems(products.filter((product) => product.car == name))
            } else {
              setItems(products)
            }
            setLoading(false)
          })
      },[name])

      if(loading){
       return <Spinner />
      } else{
        return (
          <>
            <div className="abajo position-relative">
              <ItemList items={items} />
            </div>

          </>
      
           
           
           )};
}
        
          
export default ItemListContainer;