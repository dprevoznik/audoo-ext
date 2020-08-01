import * as React from "react";

interface DateInputProps {
  date: string;
  setDate: (value: string | ((prevVar: string) => string)) => void;
  offYoutube: boolean;
}

function DateInput(props: DateInputProps) {
  var {
    date,
    setDate,
    offYoutube
  }: { date: string; setDate: (targetValue: string) => void; offYoutube: boolean } = props;
  return (
    <input
      className="standardMargin"
      value={date}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
      }}
      type="date"
      disabled={offYoutube}
    ></input>
  );
}

export default DateInput;
