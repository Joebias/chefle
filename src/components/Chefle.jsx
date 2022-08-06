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
      <Guess>
        <input
          name="guess"
          type="text"
          value={currentGuess}
          placeholder="Type Guess Here"
        />
      </Guess>

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
  align-items: initial;
  div {
    position: relative;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    text-align: center;
    margin-bottom: 5%;
  }
`;

const Guess = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5%;
  width: 100%;
  input {
    background: linear-gradient(35deg, #494949, #313131);
    text-align: center;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
`;

export default Chefle;
