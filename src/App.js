import { useEffect, useState } from "react";
import styled from "styled-components";
import Chefle from "./components/Chefle";

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
      <Title>CHEFLE</Title>
      {solution && <Chefle solution={solution} instructions={instructions} />}
    </div>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(136, 136, 136);
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;

export default App;
