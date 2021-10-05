import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [currentButtons, setcurrentButtons] = useState("");
  const [toggleButtonupdate, settoggleButtonupdate] = useState("");
  const [highlighted, sethighlighted] = useState(-1);
  // useEffect(() => {}, [toggle]);

  const onChangetinput = (e) => {
    setcurrentButtons(Number(e.target.value));
  };

  const hightlightedcss = {
    background: "grey"
  };
  return (
    <div className="App">
      <h2>Varibale Buttton Append</h2>
      <input
        type="number"
        value={currentButtons}
        placeholder="enter no of buttons"
        onChange={(e) => {
          onChangetinput(e);
        }}
        style={{ width: "30%", marginBottom: "10px" }}
      />
      <input
        type="submit"
        onClick={(e) => {
          settoggleButtonupdate(currentButtons);
        }}
        style={{ width: "10%", marginBottom: "10px" }}
      />
      <div
        style={{
          display: "flex",
          overflow: "scroll",
          border: "1px grey solid",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {toggleButtonupdate > 0 &&
          Array.from(Array(toggleButtonupdate).keys()).map((index) => {
            return (
              <button
                type="submit"
                className="addedButtons"
                placeholder={`index`}
                onClick={() => {
                  sethighlighted(index);
                }}
                key={`__${index}`}
                style={highlighted === index ? hightlightedcss : {}}
              >
                Button:{index}
              </button>
            );
          })}
      </div>
    </div>
  );
}
