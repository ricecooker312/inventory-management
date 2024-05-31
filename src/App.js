import "./App.css";
import { useState } from "react";

import SearchBar from "./SearchBar.js";
import AddItem from "./AddItem.js";
import ItemsDisplay from "./ItemsDisplay.js";

function App() {
  const [filters, setFilters] = useState({})
  const [data, setData] = useState({ items: [] })

  const updateFilters = (searchParams) => {
    setFilters(searchParams)
  }

  const addItem = (itemProperties) => {
    let items = data["items"]
    itemProperties["id"] = items.length
    items.push(itemProperties)
    setData({ items: items })

    console.log(data)
  }

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <ItemsDisplay items={data["items"]} />
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
