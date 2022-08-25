import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
const CartProducts = () => {
    const {cartItems, clear, removeItem,total} = useContext(CartContext)
    const tot = total()
    
    let descuento = tot/10;
    let totalFinal = tot - descuento

    return ( 
        <>
                    <div className="ms-5 mt-3">
                        <button className="btn btn-danger" onClick={clear}>Clear Cart</button>
                    </div>

                    <div className="mt-5 ms-5">
                        {cartItems.map(item=> <CartItem item={item} quantity={item.quantity} removeItem={removeItem} />)}
                    </div> 

                    <div className="d-flex justify-content-center">
                        {tot >30000 ? 
                        <p className="h2 fw-bold">Descuento: -{descuento}<br></br>
                            Total :{tot}</p>
                            :
                        <p className="h2 fw-bold">Total: {totalFinal}</p>}
                    </div>
        </> );
}
 
export default CartProducts;