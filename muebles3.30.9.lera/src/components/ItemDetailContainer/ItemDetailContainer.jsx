import { useEffect,useState } from "react";
import React from 'react'
import { products, traerProductos } from "../Item/products";
import ItemDetail from "./ItemDetail/ItemDetail";
import {getMock} from "../Item/products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [ products, setProducts] = useState({})

   const {detalleId} = useParams()
    useEffect(()=>{
        getMock
        .then(res=>setProducts(res.find(products.id===detalleId)))
    },[detalleId])




    return (
        <>
          <ItemDetail producto={products}/>
        </>
    )
}
