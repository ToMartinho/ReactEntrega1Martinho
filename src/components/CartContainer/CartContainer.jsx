import { useContext } from "react";
import { cartContext } from "../../App"; 
import { Link } from "react-router-dom";


function CartContainer(){
    const {cart, clearCart, removeItem} = useContext(cartContext)
    
    return(
        <div>
            <h1>Carro de compras</h1>
            {cart.map((item)=>(
                <div>
                    <div>                        
                        <h2>{item.title}</h2>
                        <img src={item.img} alt="carta"/>
                        <p>precio por unidad: ${item.price}</p>
                        <p>Cantidad a comprar: {item.count}</p>
                        <p>precio total ${item.count * item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                    <br />
                    <div>
                        total de la compra: $999
                    </div>
                </div>                
            ))}
            <br />
            <button onClick={()=> clearCart()}>Limpiar carrito de compras</button>
        </div>
    )
}

export default CartContainer;