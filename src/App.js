import { useEffect, useState } from "react";
import styled from "styled-components";
import Chefle from "./components/Chefle";
import recipes from "./db.json";

function App() {
  const [solution, setSolution] = useState("");
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    const todaysRecipe = recipes.recipes[0];
    setSolution(todaysRecipe.food);
    setInstructions(todaysRecipe.instructions);
  }, [setSolution]);

  return (
    <div className="App">
      <Title>CHEFLE</Title>
      {solution && <Chefle solution={solution} instructions={instructions} />}
    </div>
  );
}

const Title = styled.div`
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  border-bottom: 5px solid rgb(136, 136, 136);
  color: white;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-align: center;
  font-family: fantasy;
`;

export default App;
