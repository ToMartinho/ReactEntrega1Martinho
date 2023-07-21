import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";
import Item from "../Item/Item";



function ItemListContainer({props}){

    const [products, setProducts] = useState([])

    async function requestProducts(){

        const respuesta = await getData();
        setProducts(respuesta);

    }
    useEffect(()=> {
        requestProducts();
    },[]);





    return(
        <div>
            <h1>{props}</h1>
            {products.map((item)=> <Item key={item.id} {...item} />)}
        </div>
    )
}

export default ItemListContainer;