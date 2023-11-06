import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';


function App() {

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };


  return (
      <div className="App">
        <h1>Mi Lista de la Compra</h1>
        <AddItemForm onAddItem={addItem} />
        <ShoppingList items={items} />
      </div>
  );
}

export default App;
