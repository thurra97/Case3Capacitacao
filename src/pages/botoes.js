import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/Home.module.css'

const TimePickerButtons = () => {
  const times = ['07:30', '08:30', '09:30', '10:30', '11:30', '12:30', '14:30', '15:30'];
  const [selectedTime, setSelectedTime] = useState(null);

  const handleClick = async (time) => {
    setSelectedTime(time);
    try {
      const response = await axios.post('http://localhost:8000/api/time', { time });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.time_picker_buttons_container}>
      <div className={styles.time_picker_column}>
        {times.slice(0, 4).map((time) => (
          <button key={time} className={styles.time_picker_button} onClick={() => handleClick(time)}>
            {time}
          </button>
        ))}
      </div>
      <div className={styles.time_picker_column}>
        {times.slice(4).map((time) => (
          <button key={time} className={styles.time_picker_button} onClick={() => handleClick(time)}>
            {time}
          </button>
        ))}
      </div>
      {selectedTime && <p>Selected time: {selectedTime}</p>}
    </div>
  );
};

export default TimePickerButtons;
