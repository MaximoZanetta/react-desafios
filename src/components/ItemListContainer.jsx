import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "../data"
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  
  const { name } = useParams()
  const [items, setItems]= useState([])
  const [loading, setLoading] = useState(false)      
      
  useEffect(()=> {
    setLoading(true)
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products');
    if(name) {
      const queryFilter = query(queryCollection, where('model','==', name))
      getDocs(queryFilter)
      .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
      } else {
        getDocs(queryCollection) 
        .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
        // setItems(products)
      }
        setLoading(false)
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