import {useState,useEffect}from 'react'
import { traerProductos } from '../Item/products'
import ItemList from './itemList';
import { getMock } from '../Item/products';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({saludo}) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const[products,setProducts]=useState([])

    const {categoriaId}=useParams()

    useEffect(()=>{
        if (categoriaId){
        getMock
        .then(res=>setProducts(res.filter(prod=>prod.categoria===categoriaId)))
        .finally(()=>setLoading(false))
        }else{
            getMock
            .then(res=>setProducts(res))
            .finally(()=>setLoading(false))
        }
    },[categoriaId])
    console.log(products)
    
  
     console.log(data) 
    return (
      
        <div>
            {loading ?(
            <h3>loading...</h3>)
            :( 
               <> 
             <h2 style={{textAlign:'center'}}>{saludo}</h2>
            <ItemList products={data}/>
             </>
             ) }
          
        </div>


    )

}

export default ItemListContainer