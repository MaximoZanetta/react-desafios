import { useState } from "react";


const ItemCount = ({stock= 2, initial = 0, onAdd}) => {
    
    const [counter, setCounter] = useState(initial);

    const buttonHandler = (operacion)=> {

        if(operacion === "-" && counter > 0){
            setCounter(counter - 1)
        }
        else if(operacion === "+" && counter < stock ){
            setCounter(counter + 1)
        }
        
    }
    // function onAdd(){
    //     if (props.stock > 0 && props.count < props.stock) {
    //         props.onAdd(counter);
    //     }
    // }
    return (
        <>
            <div>
                <div className="text-uppercase text-white text-center">{counter}</div>
                <button className="btn btn-primary mx-2" onClick={()=>buttonHandler("+")}>+</button>
                <button className="btn btn-primary mx-2" onClick={()=>buttonHandler("-")}>-</button>
                <button
                className="btn btn-primary mx-2"
                disabled={counter === 0 || counter === ""} 
                onClick={() => onAdd(counter)}>Add to cart</button>
            </div>
        </>
    )

}

export default ItemCount;
