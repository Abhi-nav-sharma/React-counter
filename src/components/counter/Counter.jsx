import { useState } from "react";
import Header from "./Header";

const Counter = () => {
  const [state, setState] = useState(0);
  const styles = {
    color: "white"
  };
  const decrement = (value) => {
    setState(state + value);
  };
  const btn1 = {
    width: "50px",
    height: "50px",
    fontSize: "25px",
    marginRight: "100px",
    backgroundColor: "green"
  };
  const btn2 = {
    width: "50px",
    height: "50px",
    fontSize: "25px",
    marginLeft: "100px",
    backgroundColor: "red"
  };
  const btn3 = {
    width: "100px",
    height: "50px",
    fontSize: "25px",
    backgroundColor: "orange"
  };
  return (
    <div style={styles}>
      <Header title="COUNTER" />
      <h2>{state}</h2>
      <button style={btn1} onClick={() => setState(state + 1)}>
        +
      </button>
      <button style={btn2} onClick={() => decrement(-1)}>
        -
      </button>
      <br />
      <br />
      <button style={btn3} onClick={() => setState(state * 2)}>
        2X
      </button>
    </div>
  );
};
export default Counter;
