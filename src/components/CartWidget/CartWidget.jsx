import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { cartContext } from '../../App'
import { Link } from 'react-router-dom';



function CartWidget(){
    const context=useContext(cartContext);
    console.log(context);

    return(
        <div>
            <Link to="/cart">
                <img className="CartImg" src={cart} alt="cart-widget"/>
                <span>{context.getTotalItemsInCart()}</span>
            </Link>

            
        </div>
    )
}

export default CartWidget
