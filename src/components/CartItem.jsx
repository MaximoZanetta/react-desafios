const CartItem = ({item, quantity,removeItem}) => {
    return ( 
        <>
            <div className="card mb-3" style={{maxWidth: "500px"}}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={item.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.car} {item.model}</h5>
                                <p className="card-text">{quantity} products</p>
                                <p className="card-text"><small className="text-muted">${item.price}</small></p>
                                <button onClick={()=>removeItem(item.id)}><box-icon name='cut'></box-icon></button>
                            </div>
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default CartItem;