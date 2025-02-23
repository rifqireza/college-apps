import React, { useState } from "react";
import "./YearSelect.css";

const generateYears = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const currentYear = new Date().getFullYear();

const YearSelect = ({ start = 1900, end = currentYear, placeholder }) => {
  const years = generateYears(start, end);

  const [selectedYear, setSelectedYear] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const selectYear = (year) => {
    setSelectedYear(year);
    setShowPopup(false);
  };

  return (
    <div className="year-select-container" onClick={() => setShowPopup(!showPopup)}>
      <div className="year-display">
        {selectedYear || placeholder}
      </div>

      {showPopup && (
        <div className="year-popup">
          <div className="popup-header">Select Year</div>
          <div className="year-options">
            {years.map((year) => (
              <div
                key={year}
                className={`year-option ${selectedYear === year ? "selected" : ""}`}
                onClick={() => selectYear(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearSelect;
