const ItemList = (props) => {
    return (
        <>
            {
                props.items.map(
                    item => {
                        return (<div className="card" key={item.id} style={{width: "18rem"}} >
                            <img src={item.img} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.car} {item.model}</h5>
                                <p className="card-text">Año {item.year}</p>
                                <a href="#" className="btn btn-primary">Ver Mas</a>
                            </div>
                        </div>
                        )
                    }
                )
            }
        </>
    );
}

export default ItemList;