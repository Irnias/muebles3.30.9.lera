import React from 'react'
import NavBarBS from './components/Navegacion/BarraDeNavegacion'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="hooks-app">
    <NavBarBS/>
    <ItemListContainer/>
  </div>
  );
}

export default App;
