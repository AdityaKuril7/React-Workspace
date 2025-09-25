import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  const [background, setBackground] = useState("black")
  const [togle, setTogle] = useState({
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    yellow: false
  });
  const handleColor = () => {
    const colorName = prompt("enter Color name")
    setColor(colorName);
  }
  const handleBackground = () => {
    const getBackground = prompt("Enter background Color")
    setBackground(getBackground)
  }
  const [size, setSize] = useState(20)
  return (
    <div>
      <div>

        <h1
          style={{
            fontWeight: togle.bold ? "bold" : "normal",
            fontStyle: togle.italic ? "italic" : "normal",
            textDecoration: `
          ${togle.underline ? "underline " : ""} 
          ${togle.strike ? "line-through " : ""}
          `,
            color: color,
            fontSize: size,
            background: background
          }}
        >
          Hello world
        </h1>
      </div>
      <div>


        <button onClick={() => setTogle({ ...togle, bold: !togle.bold })}>Bold</button>
        <button onClick={() => setTogle({ ...togle, italic: !togle.italic })}>Italic</button>
        <button onClick={() => setTogle({ ...togle, underline: !togle.underline })}>Underline</button>
        <button onClick={() => setTogle({ ...togle, strike: !togle.strike })}>Strike</button>
        <button onClick={handleColor}>SetColor</button>
        <button onClick={handleBackground}>SetColor</button>
        <button onClick={() => setSize(size + 2)}>Increase Size</button>
        <button onClick={() => setSize(size - 2)}>Decrease Size</button>
      </div>
    </div>
  );
}

export default App;
