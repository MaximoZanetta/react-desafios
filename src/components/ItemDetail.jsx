
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle pa-abajo">
                <div className="card bg-dark" style={{ width: "30rem" }} >
                    <img src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title text-white">{item.car} {item.model}</h5>
                        <p className="card-text text-white">Año {item.year}</p>
                        <p className="card-text text-white">Disponibles: {item.stock}</p>
                        <p className="card-text text-white">$ {item.price} USD</p>
                        <ItemCount stock={item.stock} initial={0} onAdd={add} />

                    </div>
                </div>
            </div>

        </>
    );
}
function add(counter) {
    alert(`Se agregaron ${counter} al carrito de compras`);
}

export default ItemDetail;