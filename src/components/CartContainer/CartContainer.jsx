import { useContext } from "react";
import { cartContext } from "../../App"; 
import CartItems from "../CartItems/CartItems";


function CartContainer(){
    const {clearCart} = useContext(cartContext)
    
    return(
        <div>
            <h1>Carro de compras</h1>
            <CartItems/>
            <br />
            <button onClick={()=> clearCart()}>Limpiar carrito de compras</button>
        </div>
    )
}

export default CartContainer;