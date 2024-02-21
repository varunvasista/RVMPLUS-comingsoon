import React from "react";
import "./success.css";
export default function Success({ setShowSuccess }) {
  return (
    <div className="successContainer">
      <div className="successCard">
        <div className="success_header">Success</div>
        <div className="success_text">
          You have been successfully added to our mailing list. You will be
          notified soon.
        </div>
        <button
          className="success_ok_button"
          onClick={() => setShowSuccess(false)}
        >
          Okay
        </button>
      </div>
    </div>
  );
}
