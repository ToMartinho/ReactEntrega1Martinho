import { useState, useEffect } from "react";
import getData, {getCategoryData} from "../../services/asyncMock";
import Item from "../Item/Item";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";



function ItemListContainer({props}){

    const [products, setProducts] = useState([])
    const {categoryId} = useParams();

    async function requestProducts(){
        
        // "categoryId?" existe ? [?]
        let respuesta = categoryId? await getCategoryData(categoryId) : await getData();
        setProducts(respuesta);

    }
    useEffect(()=> {
        requestProducts();
    },[categoryId]);





    return(
        <div>
            <div>
                <h1>{props}</h1>
            </div>
            <div className="contenedor col-12">
                {products.map((item)=> <Item key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default ItemListContainer;