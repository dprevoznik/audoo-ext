import * as React from "react";

function RecordButton(props: any) {
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
