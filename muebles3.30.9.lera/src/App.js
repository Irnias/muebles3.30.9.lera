import React from 'react';
import NavBarBS from './components/Navegacion/BarraDeNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCounts from './components/ItemCounts/ItemCounts';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
 
  return (
   <>
    <NavBarBS/>
    <ItemListContainer saludo='Bienvenido a Muebles3.30.9.lera'/>
    <ItemCounts min={1} max={10}/>
    <ItemDetailContainer/>
    </>

  );
}

export default App;
