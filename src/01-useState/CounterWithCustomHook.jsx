import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();
    
    return(
    <>
        <h1>
            Counter con Hook: {counter}
        </h1>
        <hr/>
       <div className="p-3 d-grid ml-1 gap-2 d-md-block px-2">
            <button className="btn btn-primary px-2" type="button" onClick={() => increment(2)}>+1</button>
             <button className="btn btn-primary " onClick={() => decrement(2)}>-1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    </>)
}