import { useContext } from "react";
import { cartContext } from "../../App";

function CartItems(){
    const {cart, removeItem} = useContext(cartContext)
    return( 
        
        <div>
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
                    
                </div>                
            ))}
        </div>
        
    );
}

export default CartItems;