import * as React from "react";

interface memoryInputProps {
  memory: string;
  setMemory: (value: string | ((prevVar: string) => string)) => void;
}

function MemoryInput(props: memoryInputProps) {
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