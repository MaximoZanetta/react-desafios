import { createContext, useState } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])


    const clear = () => setCartItems([])

    const isInCart = (id) => {
        return cartItems.find(itemInCart=> itemInCart.id === id) ? true : false;
    }

    const removeItem = (id) =>{
        setCartItems(cartItems.filter(product => product.id !== id))
    }

    const addItem = (item, quantity)=>{
        const nuevoCart = cartItems.filter(newItem => newItem.id !== item.id)
        nuevoCart.push({...item, quantity})
        setCartItems(nuevoCart)
    }

    const total = ()=>{
        return cartItems.reduce((previous,current)=> previous + current.price * current.quantity,0)
    }

    const purchaseOrder = (id) => {
        // setCartItems([]);
        setCartItems([])
        console.log(id)
        Swal.fire('Orden aceptada', `Su id de compra es: ${id}`, 'success');
      };
    



    return ( 
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
            total,
            purchaseOrder,
            cartItems
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;