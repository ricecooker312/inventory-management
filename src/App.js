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

  const filterData = (data) => {
    const filteredData = []

    if (!filters.name && !filters.price && !filters.brand && !filters.type) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && filters.name !== item.name) {
        continue;
      }

      else if (filters.price !== 0 && filters.price < item.price) {
        continue;
      }

      else if (filters.brand !== "" && filters.brand !== item.brand) {
        continue;
      }

      else if (filters.type !== "" && filters.type !== item.type) {
        continue;
      }

      filteredData.push(item)
    }

    console.log(filteredData)

    return filteredData
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
      this is only for testing
      <div className="row mt-4">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
