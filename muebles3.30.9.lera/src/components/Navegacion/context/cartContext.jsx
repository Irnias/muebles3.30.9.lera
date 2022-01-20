import { useState,useContext,createContext } from "react";

//creo el contexto
const CartContext = createContext([])

//funcion que evita importar el use context en todos los archivos
export function UseCartContext() {

    return useContext(CartContext)

    
}


//creacion del componente que maneja el contexto

export const CartContextProvider = ({children}) =>{
//estados y funciones globales
const [products,SetProducts] = ([])
function agregarAlCarrito(Item) {
    SetProducts([...products,Item])

    
}
function vaciarCarrito() {
    products([])

    

}
return(
    <CartContext.Provider value = {{
        products,
        agregarAlCarrito,
        vaciarCarrito

    }}>
        {children}

    </CartContext.Provider>
)
}
