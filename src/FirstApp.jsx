//import {Fragment} from "react"
import PropTypes from 'prop-types'
import { useState } from 'react'


export const FirstApp = ( {titulo, subtitulo, name, value} ) => {
   
   // throw new Error("El title no existe")
   const[counter, setCounter] = useState( value )
   const handleAdd = () => setCounter((c)=> c + 1);
   const handleSubtract = () => setCounter((c) => c - 1);
   const reset = () => setCounter(value); 
    return(    
        <> 
            <h1 data-testid="text-title">{ titulo }</h1>
            <p>{ subtitulo }</p>
            <p>{ subtitulo }</p>
            <p>{ name }</p>
            
           
            <code>Counter App</code>
             <p>{counter}</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubtract }>-1</button>
            <button aria-label='btn-reset' onClick={ reset }>Reset</button>
        </>
    )
}

   FirstApp.PropTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    title: "No hay subtitulo",
    subtitle: "No hay subtitulo",
    name: "Javi David"
}