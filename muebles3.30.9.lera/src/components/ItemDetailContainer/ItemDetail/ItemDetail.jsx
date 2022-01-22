import { useContext,useState } from "react"
import{Link} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';
import{ItemCounts} from '../../ItemCounts/ItemCounts';


const ItemDetail = ({producto}) =>{
  const [show,setShow] = useState(true);
  const{addToCart} = useContext(CartContext);

  const onAdd = (contador)=>
  addToCart(producto,contador);
  setShow(false);
};

return (
  <>
  <div className="conatinerDetail">
    <img src={producto.img} alt={producto.name}/>
    <div style={{height: '200px'}}>
      <h3>{producto.name}</h3>
      <h3>${producto.price}</h3>
      {show ? (
        <ItemCounts onAdd={onAdd} stock = {producto.name}/> 
        ):
        (<div style={{display: 'flex', flexDirection:'column'}}>
         <Link to="/cart">
           <button className="detail">
             Ir al carrito
           </button>
         </Link>

         <Link to="/">
           <button className="detail">
             volver al inicio 
           </button>
         </Link>
        <div/>
        )}
    </div>
  </div>

  </>
 );
};

export default ItemDetail;      