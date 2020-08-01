import * as React from "react";
import Axios from "axios";
import { hot } from "react-hot-loader/root";
import allEmoji from "./inputs/emoji/allEmoji";
import EmojiRow from "./inputs/emoji/emojiRow";
import InputItems from "./inputs/inputItems";
import RecordButton from "./submission/recordButton";
import SuccessScreen from "./submission/successScreen";
import checkForYoutubeURL from "./helpers/checkForYoutubeURL";
import "./style.css";
/// <reference types="chrome/chrome-app"/>

var { useState, useEffect } = React;

function App() {
  var [memory, setMemory] = useState("");
  var [date, setDate] = useState("");
  var [involved, setInvolved] = useState("");
  var [feeling, setFeeling] = useState("neutral");
  var [success, setSuccess] = useState(false);
  var [offYoutube, setoffYoutube] = useState(true);

  function handleSubmit(e: React.MouseEvent) {
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
            .then(() => setSuccess(true))
            .catch((err: object) => console.log(err));
        }
      }
    );
  }

  useEffect(() => {
    checkForYoutubeURL(setoffYoutube);
  }, [offYoutube]);

  return success === true ? (
    <SuccessScreen />
  ) : (
    <div className="flexColumnCentered">
      <div className="titleBorder flexColumnCentered">
        <h1 className="standardMargin">Audoo It!</h1>
      </div>
      <InputItems
        memory={memory}
        setMemory={setMemory}
        involved={involved}
        setInvolved={setInvolved}
        date={date}
        setDate={setDate}
        offYoutube={offYoutube}
      />
      <EmojiRow
        allEmoji={allEmoji}
        feeling={feeling}
        setFeeling={setFeeling}
        offYoutube={offYoutube}
      />
      <RecordButton handleSubmit={handleSubmit} offYoutube={offYoutube} />
    </div>
  );
}

export default hot(App);
