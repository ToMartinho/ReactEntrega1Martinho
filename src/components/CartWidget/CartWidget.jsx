import cart from './assets/cart.svg'
import './CartWidget.css'
function CartWidget(){
    return(
        <div>
            <img className="CartImg" src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget
