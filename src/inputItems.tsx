import * as React from "react";
import MemoryInput from "./memoryInput";
import InvolvedInput from "./involvedInput";
import DateInput from "./dateInput";

function InputItems(props: any) {
  return (
    <div className="flexColumn">
      <MemoryInput memory={props.memory} setMemory={props.setMemory} />
      <InvolvedInput
        involved={props.involved}
        setInvolved={props.setInvolved}
      />
      <DateInput date={props.date} setDate={props.setDate} />
    </div>
  );
}

export default InputItems;
