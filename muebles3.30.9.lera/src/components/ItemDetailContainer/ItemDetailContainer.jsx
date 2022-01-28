import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc } from "firebase/firestore";
export const ItemDetailContainer = () => {
    const [ data, setData] = useState({})
  

   const {id} = useParams()
    
   useEffect(() => {
    const db = getFirestore();
    const queryProd = doc(db, 'Item', '013uzvg2F95c18ravIuH');
    getDoc(queryProd).then((resp) => {
        setData({ id: resp.id, ...resp.data() });
    });
    
}, [id]);



    return (
        <>
     
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        
          <ItemDetail product={data}/>
        </div>
        </>
    )
}
/* useEffect(()=>{
        getMock
        .then(res=>setProduct(res.find(producto=>producto.id===detalleId)))
    },[detalleId])

*/
