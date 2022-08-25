import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import data from "../data"
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  
  const { name } = useParams()
  const [items, setItems]= useState([])
  const [loading, setLoading] = useState(true)      
      
  useEffect(()=> {
    setLoading(true)
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products');
    
    if(name) {
      const queryFilter = query(queryCollection, where('car','==', name))
      getDocs(queryFilter)
      .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
      setLoading(false)
      } else {
        getDocs(queryCollection) 
        .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
        setLoading(false)
        // setItems(products)
      }
      
      },[name])

      if(loading){
       return <Spinner />
      }
      
        return (
          <>
            <div className="abajo position-relative">
              <ItemList items={items} />
            </div>

          </>
      
           
           
           );
}
        
          
export default ItemListContainer;