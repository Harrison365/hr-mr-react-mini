import "./App.css";
import black from "./black.png";
import { useState } from "react";

let count = 0;

function App() {
  const [board, setBoard] = useState([
    [1, 1, 1],
    [1, 2, 0],
    [1, 3, 1],
    [1, 4, 0],
    [1, 5, 1],
    [1, 6, 0],
    [1, 7, 1],
    [1, 8, 0],
    [2, 1, 0],
    [2, 2, 1],
    [2, 3, 0],
    [2, 4, 1],
    [2, 5, 0],
    [2, 6, 1],
    [2, 7, 0],
    [2, 8, 1],
    [3, 1, 1],
    [3, 2, 0],
    [3, 3, 1],
    [3, 4, 0],
    [3, 5, 1],
    [3, 6, 0],
    [3, 7, 1],
    [3, 8, 0],
    [4, 1, 0],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 0],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 0],
    [5, 1, 0],
    [5, 2, 0],
    [5, 3, 0],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 0],
    [6, 1, 0],
    [6, 2, 2],
    [6, 3, 0],
    [6, 4, 2],
    [6, 5, 0],
    [6, 6, 2],
    [6, 7, 0],
    [6, 8, 2],
    [7, 1, 2],
    [7, 2, 0],
    [7, 3, 2],
    [7, 4, 0],
    [7, 5, 2],
    [7, 6, 0],
    [7, 7, 2],
    [7, 8, 0],
    [8, 1, 2],
    [8, 2, 2],
    [8, 3, 0],
    [8, 4, 2],
    [8, 5, 0],
    [8, 6, 2],
    [8, 7, 0],
    [8, 8, 2],
  ]);

  console.log(board);

  return (
    <div className="App">
      <div id="header">
        <h1>Hello</h1>
      </div>

      <div id="board">
        {board.map((square) => {
          if (count % 2 === 0) {
            count++;
            if (square[1] === 8) {
              count++;
            }
            return (
              <div key={square} className="squareBlack">
                <p>{square}</p>
              </div>
            );
          } else {
            count++;
            if (square[1] === 8) {
              count++;
            }
            return (
              <div key={square} className="squareWhite">
                <p>{square}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
