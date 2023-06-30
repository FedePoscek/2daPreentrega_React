import './CartWidget.css'
import imgCarrito from '../../assets/shopping_cart.svg';

const CartWidget = () => {
    return (
        <div className='cart'>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartWidget
