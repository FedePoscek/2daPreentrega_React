import { useState, useEffect } from "react"
import "./ItemCount.css";

    
    const ItemCount = ({stock, inicial}) => {
        const [contador, setContador] = useState(inicial);
        // arranco en 1 por que hay 1 en stock, pensando en un ecommerce)
    
        const [color, setColor] = useState("black");
        // cambio el title con el contador
        useEffect( () => {
            document.title = `Tenés ${contador} items en carrito`;
            
            // cambio el color del botón del carrito
            // esto no es lo mas recomendado, se lo tenemos que delegar a React, se usa el estado
            //   if (contador >= 5) {
            //     document.getElementById("boton").style.color = "red";
            //   }

                if (contador > (Math.floor(stock*0.9))) {
                    setColor("red");            
                  } else {
                    setColor("rgb(159, 159, 155");
                  }
        }, [contador])


        const incrementarContador = () => {
            if (contador < stock) {
                setContador(contador + 1);
            }
        }
    
        const decrementarContador = () => {
            if (contador > inicial) {
                setContador(contador - 1);
            }
        }

        const agregarAlCarrito = () => {
            console.log(`Agregado ${contador} items`);
        }

  return (
    <>
        <div className="ContenedorCounter">
            <button className="ItemCountButton" onClick={decrementarContador}> - </button>

            <p className="NumeroCounter"> {contador} </p>

            <button className="ItemCountButton" onClick={incrementarContador}> + </button>
        </div>

        <div className="ItemCountStockDisponible" style={{color: color}}>
            Tenés {stock - contador} productos disponibles
        </div>
        
        <div>
            <button className="agregarCarritoButton" id="boton" onClick={agregarAlCarrito} style={{color: color}}> Agregar al carrito </button>
        </div>
    </>
    // style={{color: color}} - tiene doble llave por que es un objeto que le paso valores
    // las funciones van sin parentesis 
  )
}

export default ItemCount