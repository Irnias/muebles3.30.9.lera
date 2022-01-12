import {useState,useEffect}from 'react'
import { traerProductos } from '../Item/products'
import ItemList from './itemList';


const ItemListContainer = ({saludo}) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(() => {
        traerProductos.then ((resp) => {
            setData(resp)
        })
        .catch((error)=>{
        console.error(error)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, []);
    
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