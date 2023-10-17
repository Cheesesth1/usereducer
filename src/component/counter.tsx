import { useReducer } from "react";

function Counter() {
  interface IState {
    count: number;
  }

  interface IACtion {
    type: "INCREMENT" | "DECREMENT";
  }
  const counterReducer = (state: IState, action: IACtion) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };
  const [newState, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1>Counter {newState.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </>
  );
}

export default Counter;
