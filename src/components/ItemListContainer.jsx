import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const dataBase = [{
        "id": 1,
        "car": "Infiniti",
        "model": "J",
        "year": 1994,
        "stock": 8,
        "img": "http://dummyimage.com/190x100.png/5fa2dd/ffffff"
      }, {
        "id": 2,
        "car": "Mercedes-Benz",
        "model": "E-Class",
        "year": 1999,
        "stock": 8,
        "img": "http://dummyimage.com/196x100.png/dddddd/000000"
      }, {
        "id": 3,
        "car": "Mazda",
        "model": "Millenia",
        "year": 1997,
        "stock": 4,
        "img": "http://dummyimage.com/145x100.png/ff4444/ffffff"
      }, {
        "id": 4,
        "car": "Hyundai",
        "model": "Genesis",
        "year": 2009,
        "stock": 5,
        "img": "http://dummyimage.com/178x100.png/dddddd/000000"
      }, {
        "id": 5,
        "car": "Pontiac",
        "model": "Firefly",
        "year": 1984,
        "stock": 8,
        "img": "http://dummyimage.com/109x100.png/ff4444/ffffff"
      }, {
        "id": 6,
        "car": "Dodge",
        "model": "Grand Caravan",
        "year": 1993,
        "stock": 9,
        "img": "http://dummyimage.com/223x100.png/5fa2dd/ffffff"
      }, {
        "id": 7,
        "car": "GMC",
        "model": "Savana 2500",
        "year": 1996,
        "stock": 4,
        "img": "http://dummyimage.com/232x100.png/cc0000/ffffff"
      }, {
        "id": 8,
        "car": "Chevrolet",
        "model": "Suburban 1500",
        "year": 2002,
        "stock": 4,
        "img": "http://dummyimage.com/103x100.png/cc0000/ffffff"
      }, {
        "id": 9,
        "car": "BMW",
        "model": "3 Series",
        "year": 1995,
        "stock": 4,
        "img": "http://dummyimage.com/230x100.png/ff4444/ffffff"
      }, {
        "id": 10,
        "car": "Honda",
        "model": "Insight",
        "year": 2006,
        "stock": 4,
        "img": "http://dummyimage.com/154x100.png/cc0000/ffffff"
      }, {
        "id": 11,
        "car": "Chevrolet",
        "model": "Tracker",
        "year": 1999,
        "stock": 7,
        "img": "http://dummyimage.com/205x100.png/cc0000/ffffff"
      }, {
        "id": 12,
        "car": "Mazda",
        "model": "B2000",
        "year": 1985,
        "stock": 6,
        "img": "http://dummyimage.com/219x100.png/cc0000/ffffff"
      }, {
        "id": 13,
        "car": "Acura",
        "model": "Integra",
        "year": 1995,
        "stock": 10,
        "img": "http://dummyimage.com/182x100.png/ff4444/ffffff"
      }, {
        "id": 14,
        "car": "Mitsubishi",
        "model": "Galant",
        "year": 2000,
        "stock": 4,
        "img": "http://dummyimage.com/226x100.png/5fa2dd/ffffff"
      }, {
        "id": 15,
        "car": "Lexus",
        "model": "LS Hybrid",
        "year": 2012,
        "stock": 1,
        "img": "http://dummyimage.com/200x100.png/cc0000/ffffff"
      }, {
        "id": 16,
        "car": "Rolls-Royce",
        "model": "Phantom",
        "year": 2007,
        "stock": 1,
        "img": "http://dummyimage.com/216x100.png/cc0000/ffffff"
      }];

      let [items, setItems]= useState([])

      useEffect(()=>{

          let promiseItems = new Promise((resolve,reject)=>{
              setTimeout(
                  ()=>{
                      resolve(dataBase)
                  },2000
              )
          })
      
          promiseItems.then((respuesta)=> {setItems(respuesta)}
          ).catch((err)=>{console.log(err)})
      },[])

    return (
        <>
           <ItemList items={items} />
           <div className="alert alert-primary" role="alert">
              <p>{props.greeting}</p>
           </div>
        </>
    );
}

export default ItemListContainer;