import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {heroes, owners} from './data/heroes'

function App2() {
 
  const get_heroe =(id)=>{ 

    return heroes.find(element =>element.id == id);
  }
  
  const [count, setCount] = useState(0)
  const retornoArreglo = () =>{
    return ['ABC', 123];
  }
  const get_heroes_by_own = (own) => heroes.filter(heroe => heroe.owner == own);
  const heroes_by_own = get_heroes_by_own("Marvel");
  console.log(heroes_by_own);
  const   [letras, numeros] = retornoArreglo();
  console.log(letras, numeros);  
  const arregloNomnre = (nombre) =>{
    return [nombre, ()=>{console.log("Hola")}];
  } 
  const [nombre, setNombre] = arregloNomnre('Javi')
  console.log(nombre)
  setNombre();

  //promesas
  const getHeroeById = (id)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const heroe = get_heroe(id);
        if (heroe) {  return resolve(heroe) }
        else {return reject('No se pudo encontrar el heroe')};
        }, 2000)
    });
}
  getHeroeById(2).then(console.log)
  .catch(console.warn);
  const getImagen = async () =>{
      try{
      const apiKey = 'qTKV8DfFeGMSJje3KT7cieQYBD2oK7SI';
      const httpRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const {data} = await httpRequest.json();
      const {url} = data.images.original;
      //const img = document.getElementById("gif");
      //img.src = url;
      url
      } catch(error){
        console.log(error);
      };
    }

  getImagen();
  const activo = true;
  let msg = ( activo ) ? 'Activo' : 'Inactivo';
  let msg2 = !activo && 'Activo';
  console.log(msg);
  console.log(msg2);
 
 
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img id="gif" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
