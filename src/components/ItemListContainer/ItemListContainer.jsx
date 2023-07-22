import { useState, useEffect } from "react";
import getData, {getCategoryData} from "../../services/asyncMock";
import Item from "../Item/Item";
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
            <h1>{props}</h1>
            {products.map((item)=> <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemListContainer;