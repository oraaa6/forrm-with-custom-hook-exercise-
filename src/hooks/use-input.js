import { useReducer } from "react";

const defaultState = {
  value: "",
  touched: false,
};

const reducer = (state, action) => {
  if (action.type === "CHANGE VALUE") {
    return {
      value: action.value,   //action.value ----> wywołanie akcji, ponieważ w dispatchu CHANGE VALUE, mamy zmienianą właściwość value (tj. dispatch({ type: "CHANGE VALUE", value: event.target.value });), ktora aktualizuje stan
      touched: state.touched, //state.touched ----> pozostawienie obecnego stanu, nic się nie zmienia
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      touched: true, //zmiana stanu na true, w dispatchu nie mam zmienianej właściwości, tylko w tutaj
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      touched: false,
    };
  }
  return defaultState;
};
const useInput = (validateValue) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE VALUE", value: event.target.value });
  };

  const valueIsValid = validateValue(state.value); //wywołanie funkcji, która zawiera w sobie walidację
  const hasError = !valueIsValid && state.touched;

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;
