import React from 'react';
import { Calendar, DatePicker } from 'antd';

const SmallCalendar = () => {
  return (
    <div style={{ position: 'relative', top: '45rem', left:'11rem'}}>
      <Calendar style={{ width: '45rem'}} />
    </div>
  );
};

export default SmallCalendar;