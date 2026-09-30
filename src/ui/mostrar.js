//mostramos los datos por consola o en tabla
export function mostrarLibros(records){
    console.table(records)
}

export function mostrarEstadistica(est){
    console.log("Total libros: " + est.total + "\nLibros diponibles: " + est.disponibles
              + "\nLibros prestados: "+est.prestados
    )   
}
export function mostrarPorConsola(msg){
    console.log(msg)   
}