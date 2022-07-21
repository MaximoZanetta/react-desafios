const Item = ({ item }) => {
    const { img, name, car, model, year } = item;
    return (
    <>
       <div className="card bg-dark" style={{ width: "18rem" }} >
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title text-white">{car} {model}</h5>
                <p className="card-text text-white">Año {year}</p>
                <a href="#" className="btn btn-primary">Ver Mas </a>
            </div>
        </div>
        
    </>
    );
}

export default Item;