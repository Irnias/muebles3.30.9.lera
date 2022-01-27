import React,{createContext} from 'react';
import {useState} from 'react';

export const CartContext = createContext();


export const CartContextProvider = ({children})=>{
    const [cart,setCart] = useState([]);


 const addToCart = (product,cantidad)=> {
    if (isOnCart(product.id)){
        sumarCantidad(product,cantidad);
    }
    else{
        setCart([...cart,{...product,cantidad}]);

    }
};

const isOnCart = (id) =>{
    const carrito = cart.some((producto) =>producto.id ===id);

    return carrito;
}

const sumarCantidad = (item,cantidad)=>{
    const copia = [...cart];
    copia.forEach((producto)=>{
        producto.id === item.id && (producto.cantidad += cantidad);

    });
};

const deleteProd = (id) => {
const itemFiltrado =cart.filter((producto) =>producto.id!==id);
setCart(itemFiltrado);
};

const vaciarCarrito = () =>{
    setCart([])
};


const total = () =>{
   const totalCarrito =cart.reduce((prev,curr)=>prev + curr.precio * curr.cantidad,
   0
   )
   return totalCarrito
};


return (
    <CartContext.Provider
  
        value = {{ cart,addToCart,deleteProd,vaciarCarrito,total}} 
     >
        {children}
    </CartContext.Provider>
 );

};