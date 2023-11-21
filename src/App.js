import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect  } from 'react';
import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';

import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
    apiKey: "AIzaSyApqChk_yEVyUvA1d8EmIo8VK6G0u_Nc14",
    authDomain: "listacompra2-3874c.firebaseapp.com",
    projectId: "listacompra2-3874c",
    storageBucket: "listacompra2-3874c.appspot.com",
    messagingSenderId: "171148856282",
    appId: "1:171148856282:web:8a746657cd4a8f82aa8ee3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
    const [items, setItems] = useState([]);
    const userID = 'tuUserID'; // En un caso real, se obtiene de la autenticación
    const listaID = 'tuListaID'; // El ID de una lista específica

    // Cargar y observar los ítems
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'usuarios', userID, 'listas', listaID), (doc) => {
            if (doc.exists()) {

                setItems(doc.data().items);
            } else {
                console.log("No se encontró la lista!");
            }
        });

        return () => unsubscribe(); // Limpiar el observador
    }, [userID, listaID]);


    const addItem = async (newItem) => {

        const updatedItems = [...items, { nombre: newItem, cantidad: 1 }];
        setItems(updatedItems);
        await updateDoc(doc(db, 'usuarios', userID, 'listas', listaID), {
            items: updatedItems
        });
    };

    const removeItem = async (indexToRemove) => {
        const filteredItems = items.filter((_, index) => index !== indexToRemove);
        setItems(filteredItems);
        await updateDoc(doc(db, 'usuarios', userID, 'listas', listaID), {
            items: filteredItems
        });
    };


  return (
      <div className="App">
        <h1>Lista de la Compra</h1>
        <AddItemForm onAddItem={addItem} />
        <ShoppingList items={items} onRemoveItem={removeItem} />
      </div>
  );
}





export default App;
