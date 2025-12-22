"use client";
import styles from "./Calendar.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Calendar: React.FC<CalendarProps> = ({
  label,
  initialDate,
  minDate,
  maxDate,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate || null
  );
  const [currentMonth, setCurrentMonth] = useState<Date>(
    initialDate || new Date()
  );
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formtDate = (date: Date) => {
    if (!date) return "choose date";

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const getMonthName = (date: Date): string => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1, 1  
      )
    );
  };

    const goToNextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1, 1  
      )
    );
  };



  return (
    <div className={styles.calendar}>
      <label className={styles.label}>{label}</label>

      <div className={styles.calendarWrapper}>
        <div className={styles.dateInput}>
          <span className={styles.selectedText}>აირჩიეთ თარიღი</span>
          <span className={styles.icon}>
            <FaRegCalendarAlt />
          </span>
        </div>

        <div className={styles.calendarPopup}>
          <div className={styles.header}>
            <button className={styles.navButton}>
              <TiArrowLeftThick />
            </button>
            <span className={styles.monthYear}>Full year</span>
            <button className={styles.navButton}>
              <TiArrowRightThick />
            </button>
          </div>
          <div className={styles.weekdays}></div>
          <div className={styles.daysGrid}></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
