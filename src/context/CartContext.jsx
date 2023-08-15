import { createContext, useState } from "react";

// CONTEXTO DEL CARRITO
const cartContext = createContext({cart: []})
// PROVIDER DEL CARRITO
// <cartContext.Provider/>
// Custom provider
function CartContextProvider(props){
    const [cart, setCart] = useState([]);

    function addToCart(product, count){
      if (isInCart(product.id)){
        const indexUpdate = cart.findIndex((item)=> item.id === product.id)
        cart[indexUpdate].count+= count;
        setCart(cart);
      }else{      
        setCart([...cart, {...product, count}])
      }
    }

    function isInCart(id){
      return cart.some(item => item.id === id)
    }

    function getItemInCart(id){
      return cart.find(item => item.id === id)
    }

    function getTotalItemsInCart(){
      let total = 0;
      cart.forEach((item)=>{
        total += item.count;
      })
      return total;
    }
    function totalCompra(){
      let subTotal = 0;
      cart.forEach((item)=>{
        subTotal+= item.price * item.count;
      })
      return subTotal;
    }

    function removeItem(id){
      const cartUpdated = cart.filter(item => item.id !== id)
      setCart(cartUpdated)
    }

    function clearCart(){
      setCart([])
    }

    return(
      <cartContext.Provider value={{ cart, addToCart, getTotalItemsInCart, removeItem, clearCart, totalCompra, getItemInCart}}>
        {props.children}
      </cartContext.Provider>
    );
}

export {cartContext, CartContextProvider}