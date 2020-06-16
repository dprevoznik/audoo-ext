import * as React from "react";
import Axios from "axios";
import { hot } from "react-hot-loader/root";
var { useState } = React;

// interface Props {
//   main: string;
//   names: string[];
// }

function App() {
  var [memory, setMemory] = useState("");
  var [date, setDate] = useState(null);
  var [involved, setInvolved] = useState("");
  var [feeling, setFeeling] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    var submission = {
      memory,
      date,
      involved,
      feeling
    }
    console.log(submission);
  }

  return (
    <div>
      <input
        value={memory}
        onChange={(e: any) => {
          return setMemory(e.target.value);
        }}
        type="text"
      ></input>
      <input
        value={involved}
        onChange={(e) => setInvolved(e.target.value)}
        type="text"
        placeholder="Case13,Greg333"
      ></input>
      <button onClick={handleSubmit}>
        Record
      </button>
    </div>
  );
}

export default hot(App);
