import React from "react";

function Toggle() {
  return (
    <div>
      <div className="container text-center mt-3">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            onChange={(e) => {
              // Logic for toggling theme or other actions
              console.log("Switch toggled:", e.target.checked);
            }}
          />
          <label className="form-check-label" for="themeSwitch">
            <i className="bi bi-brightness-high-fill"></i>
            <i className="bi bi-moon-stars-fill"></i>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
