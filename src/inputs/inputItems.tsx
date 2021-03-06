import * as React from "react";
import MemoryInput from "./memoryInput";
import InvolvedInput from "./involvedInput";
import DateInput from "./dateInput";

interface InputItemsProps {
  memory: string;
  setMemory: (value: string | ((prevVar: string) => string)) => void;
  involved: string;
  setInvolved: (value: string | ((prevVar: string) => string)) => void;
  date: string;
  setDate: (value: string | ((prevVar: string) => string)) => void;
  offYoutube: boolean;
}

function InputItems(props: InputItemsProps) {
  return (
    <div className="flexColumn">
      <MemoryInput
        memory={props.memory}
        setMemory={props.setMemory}
        offYoutube={props.offYoutube}
      />
      <InvolvedInput
        involved={props.involved}
        setInvolved={props.setInvolved}
        offYoutube={props.offYoutube}
      />
      <DateInput
        date={props.date}
        setDate={props.setDate}
        offYoutube={props.offYoutube}
      />
    </div>
  );
}

export default InputItems;
