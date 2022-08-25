import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  
  const { name } = useParams()
  const [items, setItems]= useState([])
  const [loading, setLoading] = useState(true)      
      
  useEffect(()=> {
    console.log('true')
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products');
    
    if(name) {
      const queryFilter = query(queryCollection, where('car','==', name))
      setLoading(false)
      getDocs(queryFilter)
      .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
      console.log('false')
      } else {
        setLoading(false)
        getDocs(queryCollection) 
        .then(res => setItems(res.docs.map(product => ({id: product.id, ...product.data()}))))
        console.log('false')
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