import { Link } from "react-router-dom";

const CartAlert = ({amount}) => {
    return ( 
        <>
            <p className="text-white text-center bg-success">{amount} items in the cart</p>

            <Link to={"/cart"}><button className="btn btn-primary d-flex justify-content-center">Go to Cart 
            <div className="cart">
            <box-icon name='cart' ></box-icon>
            </div>
            </button></Link>
            
        </>
     );
}
 
export default CartAlert;