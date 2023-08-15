import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/fireBase";
import "./ItemDetailContainer.css";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../App";


function ItemDetailContainer(){
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    // extraemos la funcion de agregar del cartContext
    const {addToCart, getItemInCart} = useContext(cartContext)
    //validamos el stock disponible para la compra
    const itemInCart = getItemInCart(id);
    const maxItems = itemInCart ? product.stock - itemInCart.count : product.stock;

    async function requestProduct(){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
    }

    useEffect(()=>{
        requestProduct();
    
    },[id]);

    function handleAddToCart(clickCount){
        addToCart(product, clickCount);
        alert(`Producto agregado al carrito, cantidad: ${clickCount}`)
        setIsAddedToCart(true)

    }

    return (
        
        
        <div className="cardDetail">
            <ItemDetail {...product}/>
            {
                isAddedToCart ? <button><Link to="/cart">Ir al carrito</Link></button> : <ItemCount stock={maxItems} onAddToCart={handleAddToCart} />
            }
            <br />
            <Link to="/">
                <button>Volver al Inicio</button>
            </Link>
        </div>
    );
}



export default ItemDetailContainer;