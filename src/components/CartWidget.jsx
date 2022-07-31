import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


const CartWidget = () => {
    
    const { cartItems } = useContext(CartContext);
    return ( 
        <Link to="/cart">
         <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="total">{cartItems.length}</span>
         </div>
        </Link>
        
     );
}
 
export default CartWidget;