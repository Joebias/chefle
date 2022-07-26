import React from "react";
import styled from "styled-components";
import { FaAppleAlt } from "react-icons/fa";
import { GiAppleCore } from "react-icons/gi";

function GuessStage({ guess }) {
  if (guess) {
    let values = Object.values(guess);
    return (
      <IncorrectGuess>
        <div>
          <GiAppleCore />
        </div>
        <h4 id="guessvalue">{values[0]}</h4>
      </IncorrectGuess>
    );
  } else {
    return (
      <UnusedGuess>
        <FaAppleAlt />
      </UnusedGuess>
    );
  }
}

const UnusedGuess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0%;
  margin-right: 2rem;
  text-decoration: none;
  width: 20%;
  height: 20%;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;

    fill: green;
  }
`;

const IncorrectGuess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 20%;
  height: 20%;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
    fill: red;
  }
  @media only screen and (max-width: 1026px) {
    #guessvalue {
      display: none;
    }
  }
`;

export default GuessStage;
