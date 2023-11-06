import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        onAddItem(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Añade un artículo..."
            />
            <button type="submit">Añadir</button>
        </form>
    );
}

export default AddItemForm;