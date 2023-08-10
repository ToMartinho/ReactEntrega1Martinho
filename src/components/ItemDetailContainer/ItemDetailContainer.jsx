import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/asyncMock";
import "./ItemDetailContainer.css";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../App";


function ItemDetailContainer(){
    const [product, setProduct] = useState({});
    const { id } = useParams();

    // extraemos la funcion de agregar del cartContext
    const {addToCart} = useContext(cartContext)

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

    }

    return (
        
        
        <div className="cardDetail">
            <ItemDetail {...product}/>
            <ItemCount stock={product.stock} onAddToCart={handleAddToCart} />
            <br />
            <Link to="/">
                <button>Volver al Inicio</button>
            </Link>
        </div>
    );
}



export default ItemDetailContainer;