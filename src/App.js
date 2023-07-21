import React, { useState } from "react";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Simple React Demo</h1>
      <ItemList items={items} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default App;
