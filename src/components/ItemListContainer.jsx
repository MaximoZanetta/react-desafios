import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "../data"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
      const { name } = useParams()
      const [items, setItems]= useState([])

      const promise = new Promise((resolve)=>{
        setTimeout(
          ()=>{
              resolve(data)
          },2000)
      })
      

      useEffect(()=>{
          promise.then((res)=> {
            const products = res;
            if(name) {
              setItems(products.filter((product) => product.car == name))
            } else {
              setItems(products)
            }
          })
      },[name])

    return (
        <>
        <div className="abajo position-relative">

           <ItemList items={items} />
        </div>

        </>
           
        
    );
}

export default ItemListContainer;