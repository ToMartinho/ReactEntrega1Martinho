import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    async function requestProduct(){
        const respuesta = await getProductData(id);
        setProduct(respuesta);
    }

    useEffect(()=>{
        requestProduct();
    
    },[]);

    return (
        
        
        <div>
            <ItemDetail {...product}/>
        </div>
    );
}



export default ItemDetailContainer;