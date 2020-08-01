import * as React from "react";

function SuccessScreen() {
  function openWebsiteInNewTab() {
    parent.open("http://18.188.108.40/");
  }

  return (
    <div className="flexSuccessScreen">
      <h1 className="success">Success!</h1>
      <button
        className="standardMargin recordButton recordButtonValid"
        onClick={openWebsiteInNewTab}
      >
        Go to Audoo
      </button>
    </div>
  );
}

export default SuccessScreen;
