import * as React from "react";

function MemoryInput(props: any) {
  var { memory, setMemory }: { memory: string; setMemory: (targetValue: string) => void } = props;
  return (
    <input
      className="noBottomMargin"
      value={memory}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        return setMemory(e.target.value);
      }}
      type="text"
      placeholder="Record Memory"
    ></input>
  );
}

export default MemoryInput;