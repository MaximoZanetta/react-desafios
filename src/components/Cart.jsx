import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import CartBuy from "./CartBuy";
import CartForm from "./CartForm";
import CartProducts from "./CartProducts";



const Cart = () => {
    const {cartItems, purchaseOrder} = useContext(CartContext)
   const [orderInfo, setOrderInfo]=useState('')
   
   


    return ( 
        <>
            {cartItems.length === 0 ? (
                <CartBuy orderInfo={orderInfo} />
                ) : (
                <>
                    <CartProducts />
                    <CartForm setOrderInfo={setOrderInfo} purchaseOrder={purchaseOrder} />
                </>
            )}

            
            

        

        
        
        
        </>
        );
}
 
export default Cart;