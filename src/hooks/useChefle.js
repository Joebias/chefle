import { useState } from "react";

const useChefle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  const addNewGuess = () => {
    let formattedGuess = {
      guess: currentGuess.toLocaleUpperCase(),
      correct: "false",
    };

    if (currentGuess === solution) {
      setIsCorrect(true);
      formattedGuess.correct = true;
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;

      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess.toLocaleUpperCase()];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });

    setCurrentGuess("");
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("Out of guesses");
        return;
      }
      if (history.includes(currentGuess.toLocaleUpperCase())) {
        console.log("Word used");
        return;
      }
      addNewGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key) || key === " ") {
      setCurrentGuess((prev) => {
        return prev + key;
      });
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useChefle;
