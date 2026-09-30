//Funciones para la logica de negocio
export function librosDisponibles(records) {
   //Utilizamos el metodo filter, que nos devolverá un array con los 
   //elementos que cumplan la condición
   let libro = records.filter(libro => libro.disponible == true);
   
   return libro;
 }

 export function buscarPorGenero (records, genero){
    let libro = records.filter(libro => libro.genero == genero);
    return libro;
 }

 export function buscarPorTitulo (records,titulo){
   //Considerando que el título será único, utilizamos el metodo find que nos devolverá el primer elemento
   //que cumpla la condición
    let libro = records.find(libro => libro.titulo.toLowerCase() == titulo.toLowerCase())
    return libro;
}

export function crearEstadistica (records){
   let total = records.length
   let disponibles = librosDisponibles(records).length
   let prestados = total - disponibles
   let resultado = {
      total, 
      disponibles ,
      prestados
    }
    return resultado
        
 }