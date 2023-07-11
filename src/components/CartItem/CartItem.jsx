import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';

const CartItem = ({item, cantidad}) => {

    // me lo traigo con el useContext para tenerlos disponibles
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="CartItemContainer">
        <img className="imgDetalleCarrito" src={item.img} alt={item.nombre} />
        <h3> {item.nombre} </h3>
        <p> Cantidad: <strong> {cantidad} </strong></p>
        <p> Precio: <strong> {item.precio} </strong></p>
        <button className="botonEliminar" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        {/* <hr /> */}
    </div>
  )
}

export default CartItem