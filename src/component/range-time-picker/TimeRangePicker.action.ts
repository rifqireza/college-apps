import { useState } from "react";

const generateNumbers = (count) => Array.from({ length: count }, (_, i) => i);

export default function TimeRangePickerAction() {
  const [startTime, setStartTime] = useState({ hour: "", minute: "" });
  const [endTime, setEndTime] = useState({ hour: "", minute: "" });
  const [showPopup, setShowPopup] = useState(null); // "start" atau "end"

  const openPicker = (type) => {
    setShowPopup(type);
    if (type === "start") {
      setStartTime({ hour: "", minute: "" }); // Reset saat memilih Start Time
    } else {
      setEndTime({ hour: "", minute: "" }); // Reset saat memilih End Time
    }
  };

  const selectTime = (type, value, unit) => {
    if (type === "start") {
      const newStartTime = { ...startTime, [unit]: value };
      setStartTime(newStartTime);

      if (newStartTime.hour !== "" && newStartTime.minute !== "") {
        setShowPopup("end"); // Pindah ke pemilihan End Time
      }
    } else {
      if (unit === "hour" && value < startTime.hour) return;
      if (
        unit === "minute" &&
        endTime.hour === startTime.hour &&
        value < startTime.minute
      )
        return;

      setEndTime({ ...endTime, [unit]: value });
      if (unit === "minute") setShowPopup(null); // Tutup popup setelah pilih End Time
    }
  };

  return { generateNumbers, openPicker, selectTime, startTime, endTime, showPopup };
}
