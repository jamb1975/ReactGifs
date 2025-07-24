import { heroes} from './data/heroes'
export const getSaludo = (name) => "Nombre ".concat(name);
export const getUser = ()=>({
    uid: "ABC123",
    username: "JAMB"

});

export const getUserUnique = (user)=>({
    uid: "ABC123",
    username: user

});

export const retornaArreglo = ()=> ["ABC", 123]
export const get_heroes_by_own = (own) => heroes.filter(heroe => heroe.owner == own);
export const getHeroeById = (id)=> heroes.find( heroe => heroe.id == id);
export const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const heroe = heroes.find( heroe => heroe.id == id);    
        if (heroe) {  return resolve(heroe) }
        else {return reject('No se pudo encontrar el heroe ' + id)};
        }, 1000)
    });
}
export const getImagen = async (state) =>{
      try{
      const apiKey = 'qTKV8DfFeGMSJje3KT7cieQYBD2oK7SI';
      let httpRequest = "";
      if (state)  httpRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      else  httpRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key1=${apiKey}`);
      const {data} = await httpRequest.json();
      const {url} = data.images.original;
      //const img = document.getElementById("gif");
      //img.src = url;
      return url
      } catch(error){
        return 'No se encontro la imagen';
      };
    }
