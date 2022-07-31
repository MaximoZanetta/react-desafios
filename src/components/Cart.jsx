import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";



const Cart = () => {
   const {cartItems, clear, removeItem,total} = useContext(CartContext)
   const tot = total()
    return ( 
        <>
            {cartItems.length === 0 ? ( <>
                <h3>No hay nada...</h3>
                <Link to="/">
                    <div className="ms-5 mt-3">
                        <button className="btn btn-success">Seguir Comprando</button>
                    </div>
                </Link></> ) : (
                <>
                    <div className="ms-5 mt-3">
                        <button className="btn btn-danger" onClick={clear}>Clear Cart</button>
                    </div>

                    <div className="mt-5 ms-5">
                        {cartItems.map(item=> <CartItem item={item} quantity={item.quantity} removeItem={removeItem} />)}
                    </div> 

                    <div className="d-flex justify-content-center">
                        {tot >30000 ? 
                        <p className="h2 fw-bold">Descuento: -{tot/10}<br></br>
                            Total :{tot}</p>
                            :
                        <p className="h2 fw-bold">Total: {tot -tot/10}</p>}
                    </div>
                </>
            )}
            

        

        
        
        
        </>
        );
}
 
export default Cart;