import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import "./ItemDetailContainer.css";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer(){
    const [product, setProduct] = useState({});
    const { id } = useParams();

    async function requestProduct(){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
    }

    useEffect(()=>{
        requestProduct();
    
    },[id]);

    function handleAddToCart(clickCount){
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