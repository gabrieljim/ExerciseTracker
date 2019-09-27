import React from "react";

function GoBackButton(props) {
  return (
    <i
      id="goback"
      onClick={() => props.history.goBack()}
      className="fas fa-arrow-circle-left"
    ></i>
  );
}

export default GoBackButton;
