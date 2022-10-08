import React from "react";
import GuessStage from "./GuessStage";
import styled from "styled-components";

function Grid({ currentGuess, guesses, turn, solution }) {
  return (
    <List>
      {guesses.map((g, index) => {
        return <GuessStage key={index} guess={g} />;
      })}
    </List>
  );
}

const List = styled.div`
  display: flex;
  text-align: center;
`;

export default Grid;
