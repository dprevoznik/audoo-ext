import * as React from "react";
import EmojiRowItem from "./emojiRowItem";

interface emojiRowProps {
  allEmoji: string[][];
  feeling: string;
  setFeeling: (value: string | ((prevVar: string) => string)) => void;
}

function EmojiRow(props: emojiRowProps) {
  var {
    allEmoji,
    feeling,
    setFeeling,
  }: {
    allEmoji: string[][];
    feeling: string;
    setFeeling: (value: string | ((prevVar: string) => string)) => void;
  } = props;
  var allEmojiArray = allEmoji.map((emoji: string[], idx: number) => {
    return (
      <EmojiRowItem
        emoji={emoji}
        idx={idx}
        feeling={feeling}
        setFeeling={setFeeling}
        key={idx}
      />
    );
  });
  return <div className="flexEmojiRow">{allEmojiArray}</div>;
}

export default EmojiRow;
