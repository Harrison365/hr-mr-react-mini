import "./App.css";

let board = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E6",
  "E7",
  "E8",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
];
let count = 0;

function App() {
  return (
    <div className="App">
      {/* <div id="header">
        <h1>Hello</h1>
      </div> */}

      <div id="board">
        {board.map((square) => {
          if (count % 2 === 0) {
            count++;
            if (
              square === "A8" ||
              square === "B8" ||
              square === "C8" ||
              square === "D8" ||
              square === "E8" ||
              square === "F8" ||
              square === "G8"
            ) {
              count++;
            }
            return (
              <div key={square} className="squareBlack">
                <p>{square}</p>
              </div>
            );
          } else {
            count++;
            if (
              square === "A8" ||
              square === "B8" ||
              square === "C8" ||
              square === "D8" ||
              square === "E8" ||
              square === "F8" ||
              square === "G8"
            ) {
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
