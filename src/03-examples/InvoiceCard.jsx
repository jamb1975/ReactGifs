import React, { useLayoutEffect, useRef, useState } from 'react';

export const InvoiceCard = ({ id, name, sprites = {}}) => {

    const h2Ref = useRef();
    const [boxSize, setBoxSize] = useState({
        height: 0,
        width: 0
    })
    useLayoutEffect(() => {

        const { height, width } = h2Ref.current.getBoundingClientRect();
        setBoxSize({height, width})

    }, [name])

    console.log(JSON.stringify(sprites.back_default))
    return (
        <section style={{ height: 200, display: 'flex', flexDirection: 'row'}} className=''>
            <h2 ref={h2Ref} className='text-capitalize'>#{ id } - { name }</h2>
            <div>
                { sprites.map( sprite => (
                    
                        <img key={sprite}  src= {sprite} alt={{ name}} />
                    
                
                ))
                    
                }
            </div>    
            

            <pre>{JSON.stringify(boxSize)}</pre>
            
        </section>
        
    )
}