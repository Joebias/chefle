import { useEffect, useState } from "react";
import styled from "styled-components";
import Cheffle from "./components/Cheffle";

function App() {
  const [solution, setSolution] = useState("");
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((json) => {
        const todaysRecipe = json[0];
        setSolution(todaysRecipe.food);
        setInstructions(todaysRecipe.instructions);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Chefle</h1>
      {solution && <Cheffle solution={solution} instructions={instructions} />}
    </div>
  );
}

export default App;
