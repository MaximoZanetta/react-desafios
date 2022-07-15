import { useState } from "react";


const ItemCount = (props) => {
    
    const [counter, setCounter] = useState(props.initial);

    const buttonHandler = (operacion)=> {

        if(operacion === "-" && counter > 0){
            setCounter(counter - 1)
        }
        else if(operacion === "+" && counter < props.stock ){
            setCounter(counter + 1)
        }
    }
    return (
        <>
            <div>
                <div className="text-uppercase text-black">{counter}</div>
                <button className="btn btn-primary mx-5" onClick={()=>buttonHandler("+")}>+</button>
                <button className="btn btn-primary" onClick={()=>buttonHandler("-")}>-</button>
            </div>
        </>
    )

}

export default ItemCount;
