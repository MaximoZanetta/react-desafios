import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { img, name, car, model, year, id, price } = item;
    return (
    <>
       <div className="card bg-dark mt-5" style={{ width: "18rem" }} >
            <img src={img} className="card-img-top imagen" alt={name} />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-white">{car} {model}</h5>
                <p className="card-text text-white">${price}</p>
                <Link className="d-flex justify-content-center" to={`/item/${id}`}>
                    <button className="btn btn-primary" >Ver mas</button> 
                </Link>
            </div>
        </div>
        
    </>
    );
}

export default Item;