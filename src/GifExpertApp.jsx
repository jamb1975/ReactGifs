import { useState } from "react"
import { AddCategory, GigGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Genesis']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories( c =>   [ ...c, newCategory, ] );
        
    }
   
    return (
        <>
      
        { /* titulo*/}
            <h1>GifExpertApp</h1>
             
        { /* input */} 
        <AddCategory onNewCategory={ event => onAddCategory(event)}
        />
        { /* Listado de gif*/}
        <ol>
            { categories.map( category => 
                <GigGrid 
                        key= {category} 
                        category={ category } 
                        /> 
            ) }
           
        </ol>

       </>   
    )
}