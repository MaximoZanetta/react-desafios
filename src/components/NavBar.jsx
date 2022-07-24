
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";




const NavBar = () => {
    return (
        <>
            <nav className="fondoScreen navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/">Tienda</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-5">
                            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-white" href="#">Products</a>
                            <a className="nav-link text-white" href="#">Contact</a>
                            <a className="nav-link text-white" href="#">About us</a>
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
            
        </>

    );
}

export default NavBar;