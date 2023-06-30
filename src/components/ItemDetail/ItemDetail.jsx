import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, nombre, precio, img, stock, idCat, nombreCat}) => {
  return (
  
    <div className='ItemContainer'>
      <div className='cardProducto'>
      <h3>{nombre} </h3>
        <p>U$S {precio} </p>
        <img className='imgProducto' src={img} alt={nombre} />
        <p>ID: {id} </p>
        <ItemCount stock={stock} inicial={1}/>  
      
        {/* Vuelvo a la categoria que estaba navegando*/}
        <NavLink to={`/categoria/${idCat}`}>
          <button className='btnProducto'> Ver más {`${nombreCat}`} </button>
        </NavLink>

    </div>
  </div>
  
  )
}

export default ItemDetail



