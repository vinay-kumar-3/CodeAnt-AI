import React, { useState } from "react";
import "./SigninPage.css";
import { Saas } from "../Components/Saas";
import { SelfHosted } from "../Components/SelfHosted";

export const SigninPage = () => {
  const [activeTab, setActiveTab] = useState("SAAS");
  return (
    <div className="signin-page">
      {/* Sidebar Section */}
      <div className="sidebar-navigation">
        <div className="content">
          <div className="group-37111">
            {/* Total Emails Section */}
            <div className="total-emails">
              <div className="bg"></div>
              <div className="frame-120">
                <img className="subtract" src="./src/assets/Subtract0.png" alt="Subtract Icon" />
                <div className="ai-to-detect-autofix-bad-code">
                  AI to Detect &amp; Autofix Bad Code
                </div>
              </div>
              <div className="line-25"></div>
              <div className="frame-111">
                <div className="_30">30+</div>
                <div className="language-support">Language Support</div>
              </div>
              <div className="frame-112">
                <div className="_10-k">10K+</div>
                <div className="developers">Developers</div>
              </div>
              <div className="frame-113">
                <div className="_100-k">100K+</div>
                <div className="hours-saved">Hours Saved</div>
              </div>
            </div>

            {/* Card Section */}
            <div className="card-10">
              <div className="bg2"></div>
              <div className="group-4">
                <div className="ellipse-1"></div>
                <img
                  className="ant-design-pie-chart-filled"
                  src="./src/assets/piechart.png"
                  alt="Chart Icon"
                />
              </div>
              <div className="group-5">
                <div className="k">
                  <img className="arrow" src="./src/assets/arrow.png" alt="Arrow Icon" />
                </div>
                <div className="_14">14%</div>
                <div className="this-week">This week</div>
              </div>
              <div className="group-6">
                <div className="issues-fixed">Issues Fixed</div>
                <div className="_500-k">500K+</div>
              </div>
            </div>
  
            <img className="subtract2" src="./src/assets/Subtract.png" alt="Sidebar Decoration" />
          </div>
        </div>
        
      </div>

      {/* Main Frame Section */}
      <div className="frame-989">
        <div className="calendar">
          <div className="content2">
            {/* Header Section */}
            <div className="date-and-text">
              <div className="frame-10">
                <img className="logo" src="./src/assets/logo.png" alt="Logo" />
                <div className="code-ant-ai">CodeAnt AI</div>
              </div>
              <div className="text">Welcome to CodeAnt AI</div>
            </div>

            {/* Tabs Section */}
            <div className="horizontal-tabs">
            <div 
               className={`tab-button-base ${activeTab === "SAAS" ? "active" : ""}`}
               onClick={() => setActiveTab("SAAS")}
            >
            <div className="text2">SAAS</div>
            </div>
            <div
            className={`tab-button-base ${activeTab === "Self Hosted" ? "active" : ""}`}
            onClick={() => setActiveTab("Self Hosted")}
            >
            <div className="text2">Self Hosted</div>
            </div>

            </div>
          </div>

          {/* Main Login Section */}
          <div className="main">
            {activeTab === "SAAS" && <Saas/>}
            {activeTab === "Self Hosted" && <SelfHosted/>} 
          </div>
        </div>

        {/* Footer Section */}
        <div>
          <span className="signing_span">
              By signing up you agree to the  
            <span className="Policy">
              Privacy Policy.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
