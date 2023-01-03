//to jest ten sam hook co use-input, ale wykonany w celu ćwiczeń :D


import { useState } from "react";

const useValidation = (inputValidation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsIputTouched] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const valueOnblurHandler = () => {
    setIsIputTouched(true);
  };
  const isValid = inputValidation(enteredValue);
  const valueHasError = !isValid && isInputTouched;
  const reset = () => {
    setEnteredValue("");
    setIsIputTouched(false);
  };
  return {
    valueChangeHandler,
    valueOnblurHandler,
    valueHasError,
    enteredValue,
    reset,
    isValid
  };
};

export default useValidation;
