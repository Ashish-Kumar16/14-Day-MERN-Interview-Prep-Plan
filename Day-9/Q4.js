// 4. Manage complex state with `useReducer` and a dispatch pattern.

import { useReducer } from "react";

// Example: Counter with increment, decrement, and reset actions
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

function useCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { count: state.count, dispatch };
}

export default useCounter;
