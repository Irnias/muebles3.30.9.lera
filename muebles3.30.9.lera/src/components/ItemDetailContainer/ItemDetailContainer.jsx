import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import {getMock} from "../Item/products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})

   const {detalleId} = useParams()
    useEffect(()=>{
        getMock
        .then(res=>setProduct(res.find(producto=>producto.id===detalleId)))
    },[detalleId])




    return (
        <>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        
          <ItemDetail product={product}/>
        </div>
        </>
    )
}
