import "./App.css"
import Heading from "./components/Heading";
import NewItem from "./components/NewItem";
import AllItems from "./components/AllItems";
import { useState } from "react";

export default function App() {
  const [items, setItem] = useState([
    {
      item: "Go for shopping"
    },
    {
      item: "Take Remy to Kip-McGrath"
    },
    {
      item: "Get the t-shirt"
    },
    {
      item: "Download Family guy"
    },
    {
      item: "Prepare for tomorrow"
    },
    {
      item: "Finish coding challenge"
    },
    {
      item: "Find the tools"
    }
  ]);

  return (
    <>
      <Heading />
      <NewItem />
      <AllItems items={items} />
    </>
  )
}