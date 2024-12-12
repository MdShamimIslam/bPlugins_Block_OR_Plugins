import React, { useState } from "react";
import "./DemoTab.css";

const DemoTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Themes</h2>
        <div style={{ borderBottom: "2px solid purple" }}></div>
        <button
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Default
        </button>
        <button
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Slider
        </button>
        <button
          className={`tab ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => handleTabClick("tab3")}
        >
          Lite
        </button>
        <button
          className={`tab ${activeTab === "tab4" ? "active" : ""}`}
          onClick={() => handleTabClick("tab4")}
        >
          Wooden
        </button>
        <button
          className={`tab ${activeTab === "tab5" ? "active" : ""}`}
          onClick={() => handleTabClick("tab5")}
        >
          Card
        </button>
        <button
          className={`tab ${activeTab === "tab6" ? "active" : ""}`}
          onClick={() => handleTabClick("tab6")}
        >
          OneHaash
        </button>
      </div>

      {/* Tab content */}
      <div
        id="tab1"
        className={`tab-content ${activeTab === "tab1" ? "active" : ""}`}
      >
        <h2>Default Player</h2>
      </div>
      <div
        id="tab2"
        className={`tab-content ${activeTab === "tab2" ? "active" : ""}`}
      >
        <h2>Slider Player</h2>
      </div>
      <div
        id="tab3"
        className={`tab-content ${activeTab === "tab3" ? "active" : ""}`}
      >
        <h2>Lite Player</h2>
      </div>
      <div
        id="tab4"
        className={`tab-content ${activeTab === "tab4" ? "active" : ""}`}
      >
        <h2>Wooden Player</h2>
      </div>
      <div
        id="tab5"
        className={`tab-content ${activeTab === "tab5" ? "active" : ""}`}
      >
        <h2>Card Player</h2>
      </div>
      <div
        id="tab6"
        className={`tab-content ${activeTab === "tab6" ? "active" : ""}`}
      >
        <h2>OneHaash Player</h2>
      </div>
    </div>
  );
};

export default DemoTab;
