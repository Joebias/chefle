import React from "react";
import styled from "styled-components";

function Modal({ isCorrect, turn, solution }) {
  return (
    <ModalWindow>
      {isCorrect && (
        <GameInfo>
          <h1>You Win!</h1>
          <Solution>{solution}</Solution>
          <p>You guessed the recipe in {turn} guesses.</p>
        </GameInfo>
      )}
      {!isCorrect && (
        <GameInfo>
          <h1>Unlucky!</h1>
          <Solution>{solution}</Solution>
          <p>Better luck next time.</p>
        </GameInfo>
      )}
    </ModalWindow>
  );
}

export default Modal;

const ModalWindow = styled.div`
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const GameInfo = styled.div`
  max-width: 480px;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  margin: 10% auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
const Solution = styled.div`
  color: #ff004c;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
