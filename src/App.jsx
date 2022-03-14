import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [tableView, setView] = useState(true);
  return (
    <div className="App">
      <button className="toggleForm" onClick={() => {
        setView(!tableView)
      }}>
        {/* Show text Add House or Show Rentals based on state */}
        {tableView ? "Add House" : "Show Rentals"}
      </button>
      {/* Show component based on state */}
      {tableView ? <Rentals/> : <AddHouse/>}
      <br />
    </div>
  );
}

export default App;
