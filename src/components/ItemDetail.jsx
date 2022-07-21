import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const { img, name, car, model, year, stock , price} = item;
    return (
    <>
       <div className="card bg-dark" style={{ width: "18rem" }} >
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-white">{car} {model}</h5>
                <p className="card-text text-white">Año {year}</p>
                <p className="card-text text-white">Disponibles: {stock}</p>
                <p className="card-text text-white">$ {price} USD</p>
                <ItemCount stock={stock} initial={0} onAdd={add} />
                
            </div>
        </div>
        
    </>
    );
}
function add(counter){
    alert(`Se agregaron ${counter} al carrito de compras`);
}

export default ItemDetail;