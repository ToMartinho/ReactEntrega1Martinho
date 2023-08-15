import { useContext } from "react";
import { cartContext } from "../../App";
import "./CartItems.css"
function CartItems(){
    const {cart, removeItem} = useContext(cartContext)
    return( 
        
        <div className="contenedorCarrito">
            {cart.map((item)=>(
                <div>
                    <div>                        
                        <h2>{item.title}</h2>
                        <img width={"400px"} src={item.img} alt="carta"/>
                        <p>precio por unidad: ${item.price}</p>
                        <p>Cantidad a comprar: {item.count}</p>
                        <p>precio total ${item.count * item.price}</p>
                        <button className="btn btn-primary" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                    <br />
                    
                </div>                
            ))}
        </div>
        
    );
}

export default CartItems;