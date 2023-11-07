import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect  } from 'react';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';


function App() {
    const [items, setItems] = useState([]);

    // Cargar ítems al inicializar
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('shoppingList'));
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    // Guardar ítems cuando cambien
    useEffect(() => {
        localStorage.setItem('shoppingList', JSON.stringify(items));
    }, [items]);

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
