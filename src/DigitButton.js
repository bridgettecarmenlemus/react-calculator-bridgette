import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD.DIGIT, payload: { digit } })}
    >
      (digit)
    </button>
  );
}
