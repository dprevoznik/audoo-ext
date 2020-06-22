import * as React from "react";

interface RecordButtonValue {
  handleSubmit: (e: React.MouseEvent) => void;
}

function RecordButton(props: RecordButtonValue) {
  return (
    <div className="noBottomMargin">
      <button
        className="standardMargin recordButton"
        onClick={props.handleSubmit}
      >
        Record
      </button>
    </div>
  );
}

export default RecordButton;