import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks";
import { act } from "react";

describe('Tests to Hook useForm', () => {
    const initialForm ={
        name: "Javi",
        email: "javi@gmail.com"
    }
    
    test('Debe de regresar los valores por defecto', ()=> {

        const { result } =  renderHook(() => useForm(initialForm));
        console.log("result=>",result.current);
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onInputReset: expect.any( Function )

        });
     });

     test('Debe cambiar el nombre del formulario', () => {
     
        const newName = "Javi Augusto";
        const { result } =  renderHook(() => useForm(initialForm));
        const {onInputChange, formState, name} = result.current;
       act(() =>{
          onInputChange({target:{name:"name", value: newName}});
       })
      
        expect(result.current.name).toBe(newName)
        expect(result.current.formState.name).toBe(newName)
    
    
     

     });

      test('Debe realizar el reset del formulario', () => {
     
        const newName = "Javi Augusto";
        const { result } =  renderHook(() => useForm(initialForm));
        const {onInputChange, onInputReset} = result.current;
       act(() =>{
          onInputChange({target:{name:"name", value: newName}});
          onInputReset();

       })
      
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    
    
     

     });
      
})