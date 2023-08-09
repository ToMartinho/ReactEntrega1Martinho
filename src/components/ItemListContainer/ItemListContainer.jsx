import { useState, useEffect } from "react";
import getData, {getCategoryData} from "../../services/asyncMock";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";



function ItemListContainer(){

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





    return <ItemList products={products} />
        
    
}

export default ItemListContainer;