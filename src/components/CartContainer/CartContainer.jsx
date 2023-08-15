import { useContext } from "react";
import { cartContext } from "../../App"; 
import CartItems from "../CartItems/CartItems";
import { Link } from "react-router-dom";


function CartContainer(){
    const {cart, clearCart, totalCompra} = useContext(cartContext)
    const context= useContext(cartContext)

    if(context.getTotalItemsInCart() === 0){
        return(
            <div>
                <h2>No hay productos en el carrito</h2>
                <button className="btn"><Link to="/">Volver al inicio</Link></button>

            </div>
        ) 
        
    }
    
    return(
        <div>
            <h1>Carro de compras</h1>
            <CartItems/>
            <br />
            
            <div>
                total de la compra:$ {totalCompra()}
            </div>
           
            <button className="btn btn-primary" onClick={()=> clearCart()}>Limpiar carrito de compras</button>
        </div>
    )
}

export default CartContainer;