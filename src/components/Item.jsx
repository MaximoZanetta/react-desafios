const Item = ({ item }) => {
    const { img, name, car, model, year } = item;
    return (
    <>
       <div className="card" style={{ width: "15rem" }} >
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{car} {model}</h5>
                <p className="card-text">Año {year}</p>
                <a href="#" className="btn btn-primary">Ver Mas </a>
            </div>
        </div>
        
    </>
    );
}

export default Item;