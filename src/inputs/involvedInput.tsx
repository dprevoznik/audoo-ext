import * as React from "react";

interface involvedInputProps {
  involved: string;
  setInvolved: (value: string | ((prevVar: string) => string)) => void;
  offYoutube: boolean;
}

function InvolvedInput(props: involvedInputProps) {
  var {
    involved,
    setInvolved,
    offYoutube
  }: { involved: string; setInvolved: (targetValue: string) => void; offYoutube: boolean } = props;
  return (
    <input
      className="noBottomMargin"
      value={involved}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInvolved(e.target.value)
      }
      type="text"
      placeholder="Involved Who?"
      disabled={offYoutube}
    ></input>
  );
}

export default InvolvedInput;
