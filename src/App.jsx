// JSX es una extensión de JAVASCRIPT
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

/*
REACT ROUTER: librería de enrutamiento para React, navegar entre componentes sin recargar la página
1. Instalar: npm install react-router-dom
2. Importamos algunos componentes:
    BrowserRouter, Routes, Route
    BrowserRouter: Envuelve todos los componentes de nuestra app y habilita la navegacion entre ellos.
    Routes: Definir las rutas de navegación
    Route: Define una ruta en específico
    Tenemos que pasarle la prop "Path" con la ruta a vincular y el componenete a renderizar cuando hacemos click
*/

const App = () => {

  // acá va la parte lógica

  // Día actual
var today = new Date();
// `getDate()` devuelve el día de la semana (del 0 al 6)
var dayOf = today.getDay();
// función para obtener el día actual
function getWeekDay() {
    switch (dayOf){
        case 0: return "domingo";
        case 1: return "lunes";
        case 2: return "martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
    }
}
var dayToday = getWeekDay();

  // en el return va la interfaz del usuario
  return (
    // el div general es por que cada componente debe retornar UN elemento, pero los dejamos vacios "FRAGMENTS"
    <>
    <BrowserRouter>
      <NavBar />
      <TituloPrincipal titulo = {"Hola"} dia = {dayToday}/>
      <Routes>
        <Route />
        <Route path='/' element={<ItemListContainer greeting = {"Bienvenidos a la tienda"} />}/>
        <Route path='categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h2>Sitio en Construcción</h2>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App