import { useEffect,useState } from "react";
import React from 'react'
import { getMock, products, traerProductos } from "../Item/products";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})

 const{detalleId} = useParams()

 useEffect(()=>{
    getMock
    .then(res=>setProduct(res.find(prod=>prod.id==='1')))
},[detalleId])
console.log(product)



    return (
        <>
          <ItemDetail product={product}/>
        </>
    )
}
