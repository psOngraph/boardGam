import React, { useState } from "react";
import "./Box.css";

const MAX = 4;
const DIAGONALS = {
  a: "d",
  b: "c",
  c: "b",
  d: "a",
};
const ADJACENT = {
  a: "b",
  b: "d",
  c: "a",
  d: "c",
};
const ADJACENTANTI = {
  a: "c",
  b: "a",
  c: "d",
  d: "b",
};

function Box() {
  const [count, setCount] = useState(0);
  const [antiClock, setAnticlock] = useState(false);
  const [clock, setClock] = useState(true);
  const [status, setStatus] = useState({ a: false, b: true, c: true, d: true });

  function handleChange(e) {
    if (count === 3) {
      setCount(0);
      setAnticlock(!antiClock);
    }
    if (clock) {
      if (antiClock) {
        setStatus({
          ...status,
          [e.target.value]: true,
          [ADJACENTANTI[`${e.target.value}`]]: false,
        });
        setClock(false);
      } else {
        setStatus({
          ...status,
          [e.target.value]: true,
          [ADJACENT[`${e.target.value}`]]: false,
        });
        setClock(false);
      }
    } else {
      setCount((prev) => prev + 1);
      setStatus({
        ...status,
        [e.target.value]: true,
        [DIAGONALS[`${e.target.value}`]]: false,
      });
      setClock(true);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <button
          style={{ backgroundColor: `${!status.a ? "red" : "white"}` }}
          className="button"
          value="a"
          disabled={status.a}
          onClick={handleChange}
        ></button>
        <button
          className="button"
          style={{ backgroundColor: `${!status.b ? "red" : "white"}` }}
          value="b"
          disabled={status.b}
          onClick={handleChange}
        ></button>
      </div>
      <div className="row">
        <button
          className="button"
          style={{ backgroundColor: `${!status.c ? "red" : "white"}` }}
          value="c"
          disabled={status.c}
          onClick={handleChange}
        ></button>
        <button
          className="button"
          style={{ backgroundColor: `${!status.d ? "red" : "white"}` }}
          value="d"
          disabled={status.d}
          onClick={handleChange}
        ></button>
      </div>
    </div>
  );
}

export { Box };
