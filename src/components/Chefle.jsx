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
      {" "}
      <Card>{renderList}</Card>
      <Guess>
        <Grid
          currentGuess={currentGuess}
          guesses={guesses}
          turn={turn}
          solution={solution}
        />
        <GuessInput>
          <input
            name="guess"
            type="text"
            value={currentGuess}
            placeholder="Type Guess Here"
          />
        </GuessInput>
      </Guess>
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </>
  );
}

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  padding-top: 2%;
  height: 100%;
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
  bottom: 1%;
  width: 100%;
  height: 80%;
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
  justify-content: center;
  align-items: center;
  bottom: 1%;
  width: 100%;
  height: 15%;

  input {
    background: linear-gradient(35deg, #494949, #313131);
    text-align: center;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    display: block;
    margin: 0 auto;
  }
`;

const GuessInput = styled.div`
  padding: 1%;
  display: inline-flex;
  text-align: center;
  width: 100%;
`;

export default Chefle;
