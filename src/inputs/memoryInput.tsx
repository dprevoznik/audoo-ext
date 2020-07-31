import * as React from "react";

interface memoryInputProps {
  memory: string;
  setMemory: (value: string | ((prevVar: string) => string)) => void;
  offYoutube: boolean;
}

function MemoryInput(props: memoryInputProps) {
  var {
    memory,
    setMemory,
    offYoutube,
  }: {
    memory: string;
    setMemory: (targetValue: string) => void;
    offYoutube: boolean;
  } = props;
  return (
    <input
      className="noBottomMargin"
      value={memory}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        return setMemory(e.target.value);
      }}
      type="text"
      placeholder="Record Memory"
      disabled={offYoutube}
    ></input>
  );
}

export default MemoryInput;
