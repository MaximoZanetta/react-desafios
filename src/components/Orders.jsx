import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, documentId, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState } from "react";

const Orders = () => {

    const [compra, setCompra] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const input = document.getElementById('compra')
        const data = input.value;

        const db = getFirestore()
        const order = collection(db,'orders')
        const queryOrders = query(order,where(documentId(),'==',data || input.value))
        getDocs(queryOrders)
        .then(res => res.docs.map(doc => setCompra(doc.data())))
        
    }


    return ( 
        <>

            <div>
                {compra?.items.length == undefined ? (
                <div className="mt-5 d-flex justify-content-center">
                    <form onSubmit={handleSubmit} action="submit">
                        <input type="text" id="compra" placeholder="Ingrese orden de compra"/>
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                ): (
                    <>
                    <div className="mt-5">
                        <h3 className="d-flex justify-content-center">Compra Realizada</h3>
                        <div className="mt-3">
                            {compra?.items.map((item)=> { console.log(item)
                                return (
                                    <div className="container mt-3">
                                         <div className="card mb-3" style={{maxWidth: "700px"}}>
                                            <div className="row g-0">
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.title} {item.model}</h5>
                                                        <p className="card-text">{item.quantity} products</p>
                                                        <p className="card-text"><small className="text-muted">${item.price}</small></p>
                                                        <p className="card-text">Estado: <strong>Comprado</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 )
                                })}
                        </div>
                    </div>

                    <div className="ms-5">
                        <h4>Total: {compra.total}</h4>
                    </div>
                    
                    </>
                )}
            </div>
        
        </>
     );
}
 
export default Orders;