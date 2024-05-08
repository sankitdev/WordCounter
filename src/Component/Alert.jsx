import React from "react";

function Alert({ alert, onDismiss }) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  if (!alert) {
    return null;
  }

  return (
    <div
      className={`alert alert-${alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(alert.type)}</strong> : {alert.msg}
      <button
        type="button"
        className="btn-close"
        onClick={onDismiss} // Explicitly handle dismissal
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
