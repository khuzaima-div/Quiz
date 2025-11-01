import React from "react";

function LoginForm({ onClose }) {
  return (
    <div className="overlay">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn login">Login</button>
        <button className="btn close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
