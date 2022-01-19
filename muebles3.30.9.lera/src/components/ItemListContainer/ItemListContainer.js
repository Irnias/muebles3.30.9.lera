import {useState,useEffect}from 'react'
import ItemList from './itemList';
import { getMock } from '../Item/products';
import { useParams } from 'react-router-dom';




const ItemListContainer = ({saludo}) => {
    
    const [loading,setLoading]=useState(true)
    const[products,setProducts]=useState([])

    const {categoriaId}=useParams()

    useEffect(()=>{
        if (categoriaId){
        getMock
        .then(answer=>setProducts(answer.filter(producto=>producto.categoria===categoriaId)))
        .finally(()=>setLoading(false))
        }else{
            getMock
            .then(res=>setProducts(res))
            .finally(()=>setLoading(false))
        }
    },[categoriaId])
    console.log('products',products)

    
    
    return (
      
        <div>
            {loading ?(
            <h3>Cargando...</h3>)
            :( 
               <> 
             <h2 style={{textAlign:'center'}}>{saludo}</h2>
            <ItemList products={products}/>
             </>
             ) }
          
        </div>


    )

}

export default ItemListContainer