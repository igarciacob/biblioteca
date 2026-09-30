import './style.css'
import { records } from "./data/libros"
import { librosDisponibles, buscarPorGenero, buscarPorTitulo, crearEstadistica } from "./utils/biblioteca"
import { mostrarEstadistica, mostrarLibros, mostrarPorConsola } from "./ui/mostrar"

function inicioBiblioteca (){
  const disp = librosDisponibles(records)
  mostrarPorConsola("*** LIBROS ***")
  mostrarLibros(disp)
  //Buscar por genero
  let gen = "Novela"
  const buGenero = buscarPorGenero(records,gen)
  mostrarPorConsola("*** BÚSQUEDA POR GÉNERO (" + gen + ") ***")
  mostrarLibros(buGenero)
  //Buscar por titulo
  let tit = "Don Quijote de la Mancha"
  const buTitulo = buscarPorTitulo(records,tit)
  mostrarPorConsola("*** BÚSQUEDA POR TÍTULO (" + tit + ") ***")
  mostrarLibros(buTitulo)
  //Estadisticas
  const est=crearEstadistica(records)
  mostrarPorConsola("*** ESTADÍSTICAS ***")
  mostrarEstadistica(est)
}

document.querySelector('#app').innerHTML = `
<section id="center">  
  <div>
    <h1>Biblioteca</h1>   
  </div>
</section>
`
inicioBiblioteca()