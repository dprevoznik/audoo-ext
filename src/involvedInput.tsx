import * as React from "react";

function InvolvedInput(props: any) {
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
