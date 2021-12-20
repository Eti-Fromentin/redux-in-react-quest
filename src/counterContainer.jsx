import React from "react";
import { connect } from "react-redux";

function counterComponent({ count, dispatch }) {
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>++++</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>----</button>
        <button onClick={() => dispatch({ type: "INCREMENTBY10" })}>+10</button>
        <button onClick={() => dispatch({ type: "DECREMENTBY10" })}>-10</button>
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state,
});

const CounterContainer = connect(mapStateToProps)(counterComponent);

export default CounterContainer;
