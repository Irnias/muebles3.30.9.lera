import { useEffect,useState } from "react";
import React from 'react'
import { products, traerProductos } from "../Item/products";
import ItemDetail from "./ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [ producto, setProducto] = useState({})

    useEffect(()=>{
        traerProductos
        .then(resp=>setProducto(resp.find(prod=>prod.id==='1')))
    },[])
    console.log(producto)
    return (
        <>
          <ItemDetail producto={producto}/>
        </>
    )
}
