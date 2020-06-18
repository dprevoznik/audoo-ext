import * as React from "react";
import Axios from "axios";
import { hot } from "react-hot-loader/root";
import allEmoji from "./allEmoji";
import "./style.css";
/// <reference types="chrome/chrome-app"/>

var { useState } = React;

function App() {
  var [memory, setMemory] = useState("");
  var [date, setDate] = useState("");
  var [involved, setInvolved] = useState("");
  var [feeling, setFeeling] = useState("neutral");

  function handleSubmit(e: any) {
    e.preventDefault();
    chrome.tabs.query(
      { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
      function (tabs: any[]) {
        if (tabs[0].url.includes("https://www.youtube.com/watch")) {
          let url = tabs[0].url.split("v=")[1].slice(0, 12);
          var userName = "Dan222"; // hard-coded for now
          var sharedWithUsers = involved !== "" ? involved.split(",") : "";
          var shared = sharedWithUsers === "" ? false : true;
          var emoji = feeling === null ? "neutral" : feeling;
          var created = new Date();

          Axios.post("http://18.188.108.40/service/memory", {
            sharedWithUsers,
            userName,
            memory,
            url,
            date,
            sharedBy: userName,
            shared,
            emoji,
            public: false,
            created,
          })
            .then((results: any) => console.log(results))
            .catch((err: object) => console.log(err));
        }
      }
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1 className="standardMargin">Audoo It!</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          className="noBottomMargin"
          value={memory}
          onChange={(e: any) => {
            return setMemory(e.target.value);
          }}
          type="text"
          placeholder="Record Memory"
        ></input>
        <input
          className="noBottomMargin"
          value={involved}
          onChange={(e) => setInvolved(e.target.value)}
          type="text"
          placeholder="Involved (Case13,Greg333)"
        ></input>
        <input
          className="standardMargin"
          value={date}
          onChange={(e: any) => {
            setDate(e.target.value);
          }}
          type="date"
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {allEmoji.map((emoji: any[], idx: number) => {
          return (
            <div
              className="noBottomMargin"
              key={idx}
              onClick={() => {
                setFeeling(emoji[0]);
              }}
            >
              <span
                className={
                  feeling === emoji[0] ? "emojiSpanClicked" : "emojiSpan"
                }
                role="img"
                aria-label={emoji[0]}
              >
                {emoji[1]}
              </span>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="noBottomMargin"
      >
        <button className="standardMargin recordButton" onClick={handleSubmit}>
          Record
        </button>
      </div>
    </div>
  );
}

export default hot(App);
