import { useEffect } from "react";
import { useForm } from "../hooks";

export const TodoAdd = ({onNewTodo}) => {

  
      

       const {onInputChange, whatdo, onInputReset} = useForm({
            whatdo: '',
            
        });

    useEffect(() => {
      

    }, [whatdo])
    

    const onFormSubmit = () => {
        const newTodo = {
        id: new Date().getTime() * 7,
        description: whatdo,
        done:false

    }
        onNewTodo( newTodo );
        onInputReset();
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
                name="whatdo"
                value={whatdo} 
                onChange={onInputChange}

            />
            <button 
                type="submit"
                className="btn btn-outline-primary m-3"
                onClick={onFormSubmit}
            >
                Agregar
            </button>
        </>

    )

}