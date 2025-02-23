import "./TimeRangePicker.css";
import TimeRangePickerAction from "./TimeRangePicker.action";

type SelectType = {
  label?: string;
  placeholder?: string;
}

type TimeRangeType = {
  start?: SelectType;
  end?: SelectType;
}

const TimeRangePicker = ({ start, end }: TimeRangeType) => {
  const {
    generateNumbers,
    openPicker,
    selectTime,
    startTime,
    endTime,
    showPopup,
  } = TimeRangePickerAction();

  return (
    <div className="time-range-container">
      <div className="time-range-display">
        <span className="time-text" onClick={() => openPicker("start")}>
          {startTime.hour !== "" && startTime.minute !== ""
            ? `${startTime.hour}:${startTime.minute}`
            : start?.placeholder}
        </span>
        <span className="separator">→</span>
        <span
          className={`time-text ${!startTime.hour ? "disabled" : ""}`}
          onClick={() => startTime.hour && openPicker("end")}
        >
          {endTime.hour !== "" && endTime.minute !== ""
            ? `${endTime.hour}:${endTime.minute}`
            : end?.placeholder}
        </span>
      </div>

      {showPopup && (
        <div className="time-popup">
          <div className="popup-header">
            {showPopup === "start" ? start?.label : end?.label}
          </div>
          <div className="time-options">
            <div className="time-column">
              {generateNumbers(24).map((num) => (
                <div
                  key={num}
                  className={`time-option ${
                    showPopup === "end" && num < startTime.hour
                      ? "disabled"
                      : ""
                  }
                  ${
                    num.toString().padStart(2, "0") ===
                    (showPopup === "start" ? startTime.hour : endTime.hour)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    selectTime(
                      showPopup,
                      num.toString().padStart(2, "0"),
                      "hour"
                    )
                  }
                >
                  {num.toString().padStart(2, "0")}
                </div>
              ))}
            </div>
            <div className="time-column">
              {generateNumbers(60).map((num) => (
                <div
                  key={num}
                  className={`time-option ${
                    showPopup === "end" &&
                    endTime.hour === startTime.hour &&
                    num < startTime.minute
                      ? "disabled"
                      : ""
                  }
                  ${
                    num.toString().padStart(2, "0") ===
                    (showPopup === "start" ? startTime.minute : endTime.minute)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    selectTime(
                      showPopup,
                      num.toString().padStart(2, "0"),
                      "minute"
                    )
                  }
                >
                  {num.toString().padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeRangePicker;
