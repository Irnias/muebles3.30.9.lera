import {useState,useEffect}from 'react'
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import  {doc,getFirestore,getDocs,collection,where,query} from 'firebase/firestore'
import { products } from '../Item/products';





const ItemListContainer = ({saludo}) => {
    const [data,setData] = useState([]);
    const [loading,setLoading]=useState(true)

   
    const{id} =useParams();
   
    
  useEffect(()=>{
     if (id) {
        const db= getFirestore();
        const queryProducts =query( collection(db,'Item'),where('categoria','==',id))
        getDocs(queryProducts)
        .then((res)=>setData(res.docs.map((prod)=>({ id: prod.id, ...prod.data() })))
        );
        setLoading(false);
         
     } else {
        const db= getFirestore();
        const queryProducts = collection(db,'Item')
        getDocs(queryProducts)
        .then((res)=>setData(res.docs.map((prod)=>({ id: prod.id, ...prod.data() })))
        );
        setLoading(false);
         
         
     }
  },[id]);
      
   

    
    
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
/* const {categoriaId}=useParams()*/
/*
/* useEffect(()=>{
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
*/ 
