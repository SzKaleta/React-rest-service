import "./App.css";
import Grid from "./components/Grid.js";
import GridFilter from "./components/GridFilter.js";

import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("");
  const changeFilterHandler = (data) => {
    setFilter(data);
  };

  return (
    <div className="App-header">
      <h1>REST service</h1>
      <GridFilter onChangeFilter={changeFilterHandler} />
      <Grid filter={filter} />
    </div>
  );
}

export default App;
