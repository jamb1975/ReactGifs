import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

       const {formState, onInputChange, username, email, password, onInputReset} = useForm({
        username: '',
        email: '',
        password: ''
       });

     //  const {username, email, password} = formState;

       
        useEffect(() => {
            //console.log("useEffect call")
        }, []);

        useEffect(() => {
           // console.log(" formState changed")
        }, [formState]);

        useEffect(() => {
           // console.log("useffect email changed")
        }, [email]);

    
    return(
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input 
                type= "text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username} 
                onChange={onInputChange}
            />

            <input 
                type= "email"
                className="form-control mt-2"
                placeholder="email"
                name="email" 
                value={email}
                onChange={onInputChange}
            />

            
            <input 
                type= "password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" 
                value={password}
                onChange={onInputChange}
            />
            
            <button className="btn btn-primary mt-2" onClick={onInputReset}>Borrar</button>
           
        </>
    )
}