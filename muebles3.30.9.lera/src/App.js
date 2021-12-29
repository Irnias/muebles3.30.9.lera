import React from 'react'
import NavBarBS from './components/Navegacion/BarraDeNavegacion'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCounts from './components/ItemCounts/ItemCounts';

function App() {
const item ={
  name:'Mesa',
  precio:8000,
  categoria: 'comedor'
}


  
  return (
    <div className="hooks-app">
    <NavBarBS/>
    <ItemListContainer item={item}/>
    <ItemCounts min={1} max={10}/>
  </div>
  );
}

export default App;
