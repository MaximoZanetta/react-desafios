
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../images/TODOAUTOS.jpg"



const NavBar = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="" width="200" />
                    </div>
                </Link>
                
                <ul>
                    <li>
                        <Link className="color-red" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to={"category/Audi"}>Audi</Link>
                    </li>
                    <li>
                        <Link to={"category/Ford"}>Ford</Link>
                    </li>
                    <li>
                        <Link to={"category/Toyota"}>Toyota</Link>
                    </li>
                    <li>
                        <Link to={"category/Pontiac"}>Pontiac</Link>
                    </li>
                    <li>
                        <Link to={"category/Chevrolet"}>Chevrolet</Link>
                    </li>
                    <li>
                        <Link to={"category/Lexus"}>Lexus</Link>
                    </li>
                    <li>
                        <Link to={"category/Land-Rover"}>Land-Rover</Link>
                    </li>
                    <li>
                        <Link to={"category/Rolls-Royce"}>Rolls-Royce</Link>
                    </li>
                    <li>
                        <Link to={"orders"}>Mis Compras</Link>
                    </li>
                    <CartWidget />
                </ul>
            </header>
            
        </>

    );
}

export default NavBar;