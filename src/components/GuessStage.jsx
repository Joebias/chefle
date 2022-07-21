import React from "react";
import styled from "styled-components";
import { FaAppleAlt } from "react-icons/fa";
import { GiAppleCore } from "react-icons/gi";

function GuessStage({ guess }) {
  if (guess) {
    let values = Object.values(guess);
    console.log(values[1]);

    return (
      <Guess>
        <div>
          <GiAppleCore />
        </div>
        <h4>{values[0]}</h4>
      </Guess>
    );
  } else {
    return (
      <Guess>
        <FaAppleAlt />
      </Guess>
    );
  }
}

const Guess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default GuessStage;
