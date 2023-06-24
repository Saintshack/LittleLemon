import React, { useState } from "react";

function BookingForm({ availableTimes, updateTimes }) {
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    updateTimes(selectedDate);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <label htmlFor="date">Choose date:</label>
      <input type="date" id="date" onChange={handleDateChange} />

      <label htmlFor="time">Choose time:</label>
      <select id="time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookingForm;
