import { Link } from "react-router-dom";


const CartWidget = () => {
    ;
    return ( 
        
        <Link to="/cart">
         <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="total">0</span>
         </div>
        </Link>
        
     );
}
 
export default CartWidget;