import React from 'react';
import { useFetch } from '../hooks';
import { useCounter} from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { InvoiceCard } from './InvoiceCard';
export const  MultipleCustomHooks = () => {

   const {counter, decrement, increment  } = useCounter(1); 

   const {data, isLoading,  hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
   
   
  
   !isLoading && console.log(data)
  

    return(
        <>  {
                isLoading  
                ? <LoadingMessage /> 
                : 
                <InvoiceCard 
                    id={data.id} 
                    name = { data.name} 
                    sprites = { [
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                        
                    ] }
                />
            }
            <div>Información de Caricatura</div>
            <hr />
            <h2>{(data?.name)}</h2>

            <button className='btn btn-primary m-2' onClick={() => (counter > 1 && decrement())}>Anterior</button>
            <button  className='btn btn-primary m-2' onClick={ () => increment()}>Siguiente</button>
        </>
    )

}