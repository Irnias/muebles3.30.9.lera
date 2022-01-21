import { useState,useContext,createContext } from "react";

//creo el contexto
const CartContext = createContext([])

//funcion que evita importar el use context en todos los archivos
export function UseCartContext() {

    return useContext(CartContext)

    
}


//creacion del componente que maneja el contexto
const CartContextProvider = ({children}) =>{
//estados y funciones globales
const [cartList,SetCarList] = ([])
function agregarAlCarrito(Item) {
    SetCarList([...cartList,Item])

    
}
function vaciarCarrito() {
    SetCarList([])

    

}
return(
    <CartContext.Provider value = {{
        cartList,
        agregarAlCarrito,
        vaciarCarrito

    }}>
        {children}

    </CartContext.Provider>
)
}

export default CartContextProvider