import { useContext } from "react";
import { cartContext } from "../../App"; 
import CartItems from "../CartItems/CartItems";
import { createOrder } from "../../services/fireBase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from "react-router-dom";




function CartContainer(){
    const {cart, clearCart, totalCompra} = useContext(cartContext)
    const context= useContext(cartContext)

    
    async function handleCheckout(){
        const orderData={
            items: cart,
            buyer : {name:"Tomas", email: "tomas@mail.com", phone: "1122334455"},
            date: new Date(),
            total: totalCompra(),
        }
        const idOrder = await createOrder(orderData);
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            icon: 'success',
            title: 'COMPRA',
            text: `Su compra id: ${idOrder} se a realizado correctamente`,
            footer: 'Gracias por comprar en 5Colors MTGStore '
        })
        clearCart();
    }

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
            <br />
            <br />
            <button onClick={handleCheckout} className="btn btn-primary">chek out</button>
        </div>
    )
}

export default CartContainer;