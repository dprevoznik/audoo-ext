import * as React from "react";

function emojiRowItem(props: any) {
  var {
    emoji,
    idx,
    feeling,
    setFeeling,
  }: {
    emoji: string[];
    idx: number;
    feeling: string;
    setFeeling: (feeling: string) => void;
  } = props;

  return (
    <div
      className="noBottomMargin"
      key={idx}
      onClick={() => {
        setFeeling(emoji[0]);
      }}
    >
      <span
        className={feeling === emoji[0] ? "emojiSpanClicked" : "emojiSpan"}
        role="img"
        aria-label={emoji[0]}
      >
        {emoji[1]}
      </span>
    </div>
  );
}

export default emojiRowItem;
