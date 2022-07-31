import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])


    const clear = () => setCartItems([])

    const isInCart = (id) =>{
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
    



    return ( 
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
            total,
            cartItems
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;