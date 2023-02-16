import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [entry, setValue] = useState("");
  const [shoppingListValues, setShoppingValue] = useState<string[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery Store Order:</h2>
        {shoppingListValues.map((item) => (
          <div className="horizontal-flow store-item" key={item.toString()}>
            <div>
              {item}{" "}
              <button
                className="remove-button"
                onClick={(x) => removeButtonClicked(item.toString())}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <br />
        <input
          type="text"
          value={entry}
          onChange={(x) => setValue(x.target.value)}
          onKeyDown={textBoxKeyPress}
        />
        <div className="horizontal-flow">
          <button onClick={addToShoppingList}>Submit</button>
          <button onClick={clearShoppingList}>Clear</button>
        </div>
      </header>
    </div>
  );

  function textBoxKeyPress(e: any) {
    if (e.key === "Enter" && entry !== "") {
      addToShoppingList();
    }
  }

  function removeButtonClicked(key: string) {
    setShoppingValue(shoppingListValues.filter((item) => item !== key));
  }

  function addToShoppingList() {
    setValue("");
    setShoppingValue([...shoppingListValues, entry]);
  }

  function clearShoppingList() {
    setShoppingValue([]);
  }
}

export default App;
