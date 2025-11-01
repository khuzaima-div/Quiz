import React from "react";

function Popup({ onClose, onOpenLogin }) {
  return (
    <div className="overlay">
      <div className="popup">
        <h2 >Welcome Popup</h2>
        <button className="btn success" onClick={onOpenLogin}>
          Open Login Form
        </button>
        <button className="btn close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;






