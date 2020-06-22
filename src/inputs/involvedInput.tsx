import * as React from "react";

interface involvedInputProps {
  involved: string;
  setInvolved: (value: string | ((prevVar: string) => string)) => void;
}

function InvolvedInput(props: involvedInputProps) {
  var {
    involved,
    setInvolved,
  }: { involved: string; setInvolved: (targetValue: string) => void } = props;
  return (
    <input
      className="noBottomMargin"
      value={involved}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInvolved(e.target.value)
      }
      type="text"
      placeholder="Involved Who?"
    ></input>
  );
}

export default InvolvedInput;
