import React, { useState } from "react";
import "./App.css";
import cityImage from "./Images/bg.webp";
import Login from "./Component/Login"; 

const App = () => {
  const [activeTab, setActiveTab] = useState("signup");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const backgroundStyle = {
    backgroundImage: `url(${cityImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        {/* Top  */}
        <div className="dot pinkBg one" style={{ top: "18%", left: "24%" }}>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <div className="message">Wind Energy</div>
          {/* New Heading */}
        </div>
        <div className="ensolite-heading">Ensolite Technologies</div>{" "}
        {/* Top Right */}
        <div className="dot pinkBg two" style={{ top: "8%", left: "68%" }}>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <div className="message">Buliding Lights</div>
        </div>
        {/* Bottom Left */}
        <div className="dot pinkBg three" style={{ top: "82%", left: "13%" }}>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <div className="message">Solar Energy</div>
        </div>
        {/* Bottom Right */}
        <div className="dot pinkBg four" style={{ top: "65%", left: "68%" }}>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <div className="message">Solar Roof</div>
        </div>
        <div className="dot pinkBg five" style={{ top: "87%", left: "80%" }}>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <div className="message">Street Energy</div>
        </div>
      </div>

      <div className="content">
        <Login activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>

      {/* Bottom Center Copyright Info */}
      <div className="copyright-info">
        <p>Copyright 2024-present All Rights Reserved</p>
        <p>version: 3.1.6.5</p>
      </div>
    </div>
  );
};

export default App;
