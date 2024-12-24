import React from "react";
import "../CSS/Login.css"; // Custom styles for the Login component
import image from "../Images/logoensolite-removebg-preview.png";

const Login = ({ activeTab, handleTabClick }) => {
  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={image} alt="Logo" className="logo" />
      </div>

      {/* Form based on active tab */}
      {activeTab === "login" ? (
        <div className="form-container">
          <h3>Login Form</h3>
          <form>
            <input type="email" placeholder="Email" required />
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <button type="submit" className="button-33">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <h3>Sign Up Form</h3>
          <form>
            <input type="email" placeholder="Email" required />
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <input type="password" placeholder="Confirm Password" required />
            <br />
            <button type="submit" className="button-33">
              Sign Up
            </button>
          </form>
        </div>
      )}

      {/* Toggle button at the bottom */}
      <button
        className="toggle-button"
        onClick={() =>
          handleTabClick(activeTab === "login" ? "signup" : "login")
        }
      >
        {activeTab === "login" ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default Login;
