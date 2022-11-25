import "./App.css";
import black from "./black.png";
import red from "./red.png";
import { useState } from "react";

let count = 0;

function App() {
  const [swapArr, setSwapArr] = useState([]);
  const [board, setBoard] = useState({
    1: [1, 1, "black", 1],
    2: [1, 2, "white", 0],
    3: [1, 3, "black", 1],
    4: [1, 4, "white", 0],
    5: [1, 5, "black", 1],
    6: [1, 6, "white", 0],
    7: [1, 7, "black", 1],
    8: [1, 8, "white", 0],
    9: [2, 1, "white", 0],
    10: [2, 2, "black", 1],
    11: [2, 3, "white", 0],
    12: [2, 4, "black", 1],
    13: [2, 5, "white", 0],
    14: [2, 6, "black", 1],
    15: [2, 7, "white", 0],
    16: [2, 8, "black", 1],
    17: [3, 1, "black", 1],
    18: [3, 2, "white", 0],
    19: [3, 3, "black", 1],
    20: [3, 4, "white", 0],
    21: [3, 5, "black", 1],
    22: [3, 6, "white", 0],
    23: [3, 7, "black", 1],
    24: [3, 8, "white", 0],
    25: [4, 1, "white", 0],
    26: [4, 2, "black", 0],
    27: [4, 3, "white", 0],
    28: [4, 4, "black", 0],
    29: [4, 5, "white", 0],
    30: [4, 6, "black", 0],
    31: [4, 7, "white", 0],
    32: [4, 8, "black", 0],
    33: [5, 1, "black", 0],
    34: [5, 2, "white", 0],
    35: [5, 3, "black", 0],
    36: [5, 4, "white", 0],
    37: [5, 5, "black", 0],
    38: [5, 6, "white", 0],
    39: [5, 7, "black", 0],
    40: [5, 8, "white", 0],
    41: [6, 1, "white", 0],
    42: [6, 2, "black", 2],
    43: [6, 3, "white", 0],
    44: [6, 4, "black", 2],
    45: [6, 5, "white", 0],
    46: [6, 6, "black", 2],
    47: [6, 7, "white", 0],
    48: [6, 8, "black", 2],
    49: [7, 1, "black", 2],
    50: [7, 2, "white", 0],
    51: [7, 3, "black", 2],
    52: [7, 4, "white", 0],
    53: [7, 5, "black", 2],
    54: [7, 6, "white", 0],
    55: [7, 7, "black", 2],
    56: [7, 8, "white", 0],
    57: [8, 1, "white", 0],
    58: [8, 2, "black", 2],
    59: [8, 3, "white", 0],
    60: [8, 4, "black", 2],
    61: [8, 5, "white", 0],
    62: [8, 6, "black", 2],
    63: [8, 7, "white", 0],
    64: [8, 8, "black", 2],
  });
  const [peice, setPeice] = useState();

  return (
    <div className="App">
      <div id="header">
        <h1>Checkers!</h1>
      </div>

      <div id="board">
        {Object.entries(board).map(([key, values]) => {
          const [y, x, square, checker] = values;
          if (square === "white") {
            return (
              <div
                key={key}
                onClick={() => {
                  if (peice) {
                  }
                }}
                className="squareWhite"
              >
                <div>{key}</div>
              </div>
            );
          }
          if (square === "black" && checker === 0) {
            return (
              <div
                key={square}
                onClick={() => {
                  setPeice(square);
                  console.log(peice);
                }}
                className="squareBlack"
              >
                <div>{key}</div>
              </div>
            );
          }
          if (square === "black" && checker === 1) {
            return (
              <div
                key={square}
                onClick={() => {
                  setPeice(square);
                  console.log(peice);
                }}
                className="squareBlack"
              >
                <div>{key}</div>
                <img src={black}></img>
              </div>
            );
          }
          if (square === "black" && checker === 2) {
            return (
              <div
                key={square}
                onClick={() => {
                  setPeice(square);
                  console.log(peice);
                }}
                className="squareBlack"
              >
                <div>{key}</div>
                <img src={red}></img>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
