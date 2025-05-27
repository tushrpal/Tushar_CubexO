import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";

import { useState } from 'react';
import './Calendar.css';

const padDay = (d) => (d < 10 ? `0${d}` : `${d}`);

const getMonthName = (monthIndex) => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return months[monthIndex];
};

const UNAVAILABLE_DATES = new Set([
  '2025-05-08',
  '2025-05-15',
  '2025-06-10',
]);

const PINK_BACKGROUND_DAYS = new Set([]);

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = padDay(date.getMonth() + 1);
  const day = padDay(date.getDate());
  return `${year}-${month}-${day}`;
};

const isBeforeToday = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const Calendar = () => {
  const now = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const generateDays = () => {
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    const totalGridCells = 42;

    return Array.from({ length: totalGridCells }, (_, i) => {
      let dayNum, isCurrentMonth, dateObj;

      if (i < firstDayIndex) {
        dayNum = daysInPrevMonth - firstDayIndex + 1 + i;
        isCurrentMonth = false;
        dateObj = new Date(currentYear, currentMonth - 1, dayNum);
      } else if (i < firstDayIndex + daysInCurrentMonth) {
        dayNum = i - firstDayIndex + 1;
        isCurrentMonth = true;
        dateObj = new Date(currentYear, currentMonth, dayNum);
      } else {
        dayNum = i - (firstDayIndex + daysInCurrentMonth) + 1;
        isCurrentMonth = false;
        dateObj = new Date(currentYear, currentMonth + 1, dayNum);
      }

      return { day: dayNum, currentMonth: isCurrentMonth, dateObj, index: i };
    });
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(direction === 'prev' ? newDate.getMonth() - 1 : newDate.getMonth() + 1);
    setCurrentDate(newDate);
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  const handleDateClick = (dayInfo, dateObj) => {
    const isoDate = formatDate(dateObj);
    if (!dayInfo.currentMonth || UNAVAILABLE_DATES.has(isoDate) || isBeforeToday(dateObj)) return;

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(dateObj);
      setSelectedEndDate(null);
    } else if (dateObj < selectedStartDate) {
      setSelectedEndDate(selectedStartDate);
      setSelectedStartDate(dateObj);
    } else {
      setSelectedEndDate(dateObj);
    }
  };

  const isDateInRange = (date) =>
    selectedStartDate && selectedEndDate && date >= selectedStartDate && date <= selectedEndDate;

  const isStartDate = (date) => selectedStartDate && date.getTime() === selectedStartDate.getTime();
  const isEndDate = (date) => selectedEndDate && date.getTime() === selectedEndDate.getTime();

  const daysArray = generateDays();
  const weeks = Array.from({ length: 6 }, (_, weekIndex) => {
    const week = daysArray.slice(weekIndex * 7, weekIndex * 7 + 7);
    return { weekIndex, week };
  });

  const startDate = new Date(currentYear, currentMonth, 1);
  const endDate = new Date(currentYear, currentMonth + 1, 0);

  return (
    <div className="calendar-main">
      <div className="calendar-container">
        <div className="calendar-header">
          <button className="nav-button" onClick={() => navigateMonth('prev')}><FaAngleLeft /></button>
          <div className="month-display">
            {padDay(startDate.getDate())} {getMonthName(startDate.getMonth())} {startDate.getFullYear()} -{' '}
            {padDay(endDate.getDate())} {getMonthName(endDate.getMonth())} {endDate.getFullYear()}
          </div>
          <button className="nav-button" onClick={() => navigateMonth('next')}><FaAngleRight /></button>
        </div>

        <div className="weekdays">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>

        <div className="days-grid">
          {weeks.map(({ week }) => (
            <div key={week[0].index} className="week-row">
              {week.map(({ day, currentMonth, dateObj, index }) => {
                const isoDate = formatDate(dateObj);
                const isUnavailable = currentMonth && UNAVAILABLE_DATES.has(isoDate);
                const isUnavailableInRange = isUnavailable && isDateInRange(dateObj);
                const isRangeSelected = isDateInRange(dateObj);
                const isStart = isStartDate(dateObj);
                const isEnd = isEndDate(dateObj);
                const beforeToday = isBeforeToday(dateObj);

                let dayClass = 'day';
                if (!currentMonth) dayClass += ' non-current-month';
                if (isUnavailableInRange) dayClass += ' unavailable';
                if (isRangeSelected) dayClass += ' in-range';
                if (isStart) dayClass += ' range-start';
                if (isEnd) dayClass += ' range-end';
                if (beforeToday) dayClass += ' past';

                const isInteractive = currentMonth && !isUnavailableInRange && !beforeToday;

                return (
                  <div
                    key={index}
                    className={dayClass}
                    onClick={() => isInteractive && handleDateClick({ day, currentMonth }, dateObj)}
                    tabIndex={isInteractive ? 0 : -1}
                    role={isInteractive ? 'button' : undefined}
                  >
                    <span>{padDay(day)}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <div className="unavailable-legend"></div>
          <span>Unavailable</span>
        </div>
        <div className="legend-item">
          <div className="selected-legend"></div>
          <span>Selected Range</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
