import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

     const [item, setItem]= useState({})
     const params = useParams()

    
      useEffect(()=>{

        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', params.id);

        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data()}))

      },[params])

    return (
        <>
        <div className="mt-5">

           <ItemDetail item={item} />
        </div>

        </>
           
        
    );
}

export default ItemDetailContainer;