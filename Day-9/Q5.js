// 5. Write a unit test for a custom hook using hook testing utilities.

// Example: Testing useCounter hook from Q4.js

import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./Q4";

test("should increment, decrement, and reset the counter", () => {
  const { result } = renderHook(() => useCounter());

  // Initial value
  expect(result.current.count).toBe(0);

  // Increment
  act(() => {
    result.current.dispatch({ type: "increment" });
  });
  expect(result.current.count).toBe(1);

  // Decrement
  act(() => {
    result.current.dispatch({ type: "decrement" });
  });
  expect(result.current.count).toBe(0);

  // Reset
  act(() => {
    result.current.dispatch({ type: "increment" });
    result.current.dispatch({ type: "reset" });
  });
  expect(result.current.count).toBe(0);
});
