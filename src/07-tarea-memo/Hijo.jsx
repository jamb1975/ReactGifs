import { memo } from "react";


export const Hijo = memo( ({numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            key={numero}
            className="btn btn-primary m-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
