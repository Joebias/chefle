import React, { useEffect } from "react";
import useChefle from "../hooks/useChefle";
import Grid from "./Grid";
import styled from "styled-components";

function Cheffle({ solution, instructions }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useChefle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  const renderList = instructions.map((item, index) => (
    <div key={index}>{index <= turn && item}</div>
  ));

  useEffect(() => {}, [guesses, turn, isCorrect]);
  return (
    <>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        solution={solution}
      />
      <Card>{renderList}</Card>
      <div>current guess - {currentGuess}</div>
    </>
  );
}

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: black;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
  }
`;

export default Cheffle;
