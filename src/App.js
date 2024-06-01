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
    <div className="container">
      <div className="row mt-4">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
