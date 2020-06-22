import * as React from "react";

interface DateInputProps {
  date: string;
  setDate: (value: string | ((prevVar: string) => string)) => void;
}

function DateInput(props: DateInputProps) {
  var {
    date,
    setDate,
  }: { date: string; setDate: (targetValue: string) => void } = props;
  return (
    <input
      className="standardMargin"
      value={date}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
      }}
      type="date"
    ></input>
  );
}

export default DateInput;
