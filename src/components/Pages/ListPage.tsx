import React, { useState } from 'react';
import './ListPage.css';

const ListPage: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState<string>('');

  const addItem = (): void => {
    if (newItem.trim() !== '') {
      setItems(prevItems => [...prevItems, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div className="content-section list-section">
      <h2>Dynamic List</h2>
      <div className="add-item-controls">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item..."
          className="new-item-input"
        />
        <button onClick={addItem} className="btn btn-add-item">
          Add Item
        </button>
      </div>
      <ul className="item-list">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <p className="empty-list-message">No items in the list yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ListPage;
