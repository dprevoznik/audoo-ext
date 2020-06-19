import * as React from "react";
import EmojiRowItem from "./emojiRowItem";

function EmojiRow(props: any) {
  var {
    allEmoji,
    feeling,
    setFeeling,
  }: {
    allEmoji: string[][];
    feeling: string;
    setFeeling: (newFeeling: string) => void;
  } = props;
  var allEmojiArray = allEmoji.map((emoji: string[], idx: number) => {
    return (
      <EmojiRowItem
        key={emoji}
        emoji={emoji}
        idx={idx}
        feeling={feeling}
        setFeeling={setFeeling}
      />
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {allEmojiArray}
    </div>
  );
}

export default EmojiRow;
