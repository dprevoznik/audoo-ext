import * as React from "react";

interface RecordButtonValue {
  handleSubmit: (e: React.MouseEvent) => void;
  offYoutube: boolean;
}

function RecordButton(props: RecordButtonValue) {
  return (
    <div className="noBottomMargin">
      <button
        className={`standardMargin recordButton ${
          props.offYoutube ? "" : "recordButtonValid"
        }`}
        onClick={props.handleSubmit}
        disabled={props.offYoutube}
      >
        {props.offYoutube ? "N/A Website" : "Submit"}
      </button>
    </div>
  );
}

export default RecordButton;
