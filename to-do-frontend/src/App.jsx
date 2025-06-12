import "./App.css"
import Heading from "./components/Heading";
import NewItem from "./components/NewItem";
import AllItems from "./components/AllItems";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100").then(data => data.json()).then(result => {
      setItems(result.data);
    });
  }, []);

  return (
    <>
      <Heading />
      <NewItem />
      <AllItems items={items} />
    </>
  )
}