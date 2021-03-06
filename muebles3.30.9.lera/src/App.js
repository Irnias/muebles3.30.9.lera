import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBarBS from './components/Navegacion/BarraDeNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import {CartContextProvider} from './components/Context/CartContext'




function App() {
 
  return (
    <CartContextProvider>
    <BrowserRouter>
   
    <NavBarBS/>
    <Routes>
      <Route exact path='/'element={<ItemListContainer/>}/>
      <Route exact path='/categoria/:categoriaId'element={<ItemListContainer saludo='Bienvenido a Muebles3.30.9.lera'/>}/>
      <Route exact path='/detalle/:detalleId'element={<ItemDetailContainer/>}/>
      <Route exact path='/cart'element={<Cart/>}/>
  
    </Routes>
   

    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
