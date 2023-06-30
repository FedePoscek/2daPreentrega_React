import  { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asynmock";
import ItemList from "../ItemList/ItemList";
// import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();


  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;

    funcion(idCategoria)
      .then(res => setProductos(res))
      // getProductos()
      // .then(respuesta => setProductos(respuesta))
      // .catch(error => console.log(error))
    }, [idCategoria])



  // const [producto, setProducto] = useState(null);
    
  // useEffect(() => {
  // getUnProducto(4)
  // .then(respuesta => setProducto(respuesta))
  // .catch(error => console.log(error))
  // })


  return (
    <>
      <div>
        <h2>
          {props.greeting} 
        </h2>
        <ItemList productos={productos} />
      </div>
    </>
  )
}

export default ItemListContainer

// ------ ACA FUNCIONA CON LA LISTA SOLA

// import  { useState, useEffect } from "react";
// import { getProductos } from "../../asynmock";
// import ItemList from "../ItemList/ItemList";

// const ItemListContainer = (props) => {

//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//       getProductos()
//       .then(respuesta => setProductos(respuesta))
//       .catch(error => console.log(error))
//     }, [])
//   return (
//     <h2>
//        {props.greeting} 
//        <ItemList productos={productos} />
       
//     </h2>
//   )
// }

// export default ItemListContainer


// --------------------------
// ------ ACA FUNCIONA CON LA EL PRODUCTO SOLO


// import  { useState, useEffect } from "react";
// import { getProductos, getUnProducto } from "../../asynmock";
// import ItemList from "../ItemList/ItemList";
// import ItemDetail from "../ItemDetail/ItemDetail";

// const ItemListContainer = (props) => {

//   const [producto, setProducto] = useState(null);

//   useEffect(() => {
//       getUnProducto(4)
//       .then(respuesta => setProducto(respuesta))
//       .catch(error => console.log(error))
//   })
//   return (
//     <h2>
//      <ItemDetail {...producto} />

//     </h2>
//   )
// }

// export default ItemListContainer