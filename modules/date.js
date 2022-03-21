import { DateTime } from './luxon.js';

const DisplayTime = () => {
  document.getElementById('date').innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY
  );
  setInterval(DisplayTime, 1000);
};

export default DisplayTime;