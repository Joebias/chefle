import React, { useEffect, useState } from "react";
import useChefle from "../hooks/useChefle";
import Grid from "./Grid";
import styled from "styled-components";
import Modal from "./Modal";

function Chefle({ solution, instructions }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useChefle(solution);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 200);
      console.log("congrats, you win");
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 200);
      console.log("unlucky, out of guesses");
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  const renderList = instructions.map((item, index) => (
    <div key={index}>
      {index <= turn && index <= turn && !isCorrect && item}
    </div>
  ));

  return (
    <>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        solution={solution}
      />
      <Card>{renderList}</Card>
      <Guess
        name="guess"
        type="text"
        value={currentGuess}
        placeholder="Type Guess Here"
      />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
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

const Guess = styled.input`
  margin: 0rem 20rem;
  width: 50%;
  position: relative;
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
`;

export default Chefle;
