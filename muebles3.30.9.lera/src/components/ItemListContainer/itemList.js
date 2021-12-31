import {useState,useEffect} from 'react'
import { getFetch } from '../Item/Item'
const ItemList = () => {
    const [productos,setProductos]=useState([])


    useEffect(()=>{
       getFetch
       .then
       .catch(err=>console.log(err))

    },[])
    return (
      
          {productos.map(prod=><div
                                key={prod.id}>

        </div>
    )
}

export default ItemList 

