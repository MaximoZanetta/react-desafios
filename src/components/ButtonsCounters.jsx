import { useState } from "react";


const useButton = () => {
    
    const [counter, setCounter] = useState(0);

    function increase() {
        setCounter(counter + 1)
    }
    function decrease() {
        setCounter(counter - 1)
    }
    return {
        counter, increase, decrease
    }

}

const ButtonsCounters = () => {
    const { counter, increase, decrease } = useButton();
    return (
        
            <div>
                <div className="text-uppercase text-black">{counter}</div>
                <button className="btn btn-primary mx-5" onClick={increase}>+</button>
                <button className="btn btn-primary" onClick={decrease}>-</button>
            </div>
        
    );
}

export default ButtonsCounters;

