import "./App.css";
import black from "./black.png";
import red from "./red.png"
import { useState } from "react";

let count = 0;

function App() {
  const [swapArr, setSwapArr] = useState([])
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
    [6, 1, 2],
    [6, 2, 0],
    [6, 3, 2],
    [6, 4, 0],
    [6, 5, 2],
    [6, 6, 0],
    [6, 7, 2],
    [6, 8, 0],
    [7, 1, 0],
    [7, 2, 2],
    [7, 3, 0],
    [7, 4, 2],
    [7, 5, 0],
    [7, 6, 2],
    [7, 7, 0],
    [7, 8, 2],
    [8, 1, 2],
    [8, 2, 0],
    [8, 3, 2],
    [8, 4, 0],
    [8, 5, 2],
    [8, 6, 0],
    [8, 7, 2],
    [8, 8, 0]
  ]);
  const [peice, setPeice] = useState()
  
  
  return (
    <div className="App">
      <div id="header">
        <h1>Checkers!
        </h1>
      </div>

      <div id="board">
        {board.map((square, index) => {
          if (count % 2 === 0) {
            count++;
            if (square[1] === 8) {
              count++;
            }
            return  ( board[index][2] === 1 ?
              <div key={square} onClick={() => {setPeice(square); console.log(peice); }} className="squareBlack">
                <div>{square}</div>
                <img src={black}></img>
              </div>
              :
              <div key={square} className="squareBlack">
              <div>{square}</div>
            </div>
            );
          } else {
            count++;
            if (square[1] === 8) {
              count++;
            }
            return ( board[index][2] === 2 ?
              <div key={square} onClick={() => {setPeice(square); console.log(peice); }} className="squareWhite">
              <div>{square}</div>
              <img src={red}></img>
            </div>
              :
              <div key={square} onClick={() => {if(peice){}}} className="squareWhite">
                <div>{square}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
