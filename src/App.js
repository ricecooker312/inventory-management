import "./App.css";
import { useState, useEffect } from "react";

import SearchBar from "./SearchBar.js";
import AddItem from "./AddItem.js";
import ItemsDisplay from "./ItemsDisplay.js";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name && !filters.price && !filters.brand && !filters.type) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && filters.name !== item.name) {
        continue;
      } else if (filters.price !== 0 && filters.price < item.price) {
        continue;
      } else if (filters.brand !== "" && filters.brand !== item.brand) {
        continue;
      } else if (filters.type !== "" && filters.type !== item.type) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  const addItem = (itemProperties) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(itemProperties),
    };

    fetch("http://localhost:8000/items", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
  };

  const deleteItem = (item) => {
    const items = data["items"];

    const requestOptions = {
      method: "DELETE",
    };

    fetch(`http://localhost:8000/items/${item["id"]}`, requestOptions).then(
      (res) => {
        if (res.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
        />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
