import React, { useState } from "react";
import Popup from "./Projects/Popup";
import LoginForm from "./Projects/LoginForm";
import "./Projects/Style.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="main-container">
      <button className="open-btn" onClick={() => setShowPopup(true)}>
        Open Popup
      </button>

      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onOpenLogin={() => {
            setShowPopup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </div>
  );
}

export default App;



