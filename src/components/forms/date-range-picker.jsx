'use client';
import React, { useState } from 'react';
import { LuCalendarDays } from 'react-icons/lu';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';

export default function DateRangePicker({
  selectedDateRange,
  setSelectedDateRange,
}) {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [hasSelectedDate, setHasSelectedDate] = useState(false);

  const handleDateRangeChange = (ranges) => {
    setSelectedDateRange(ranges.selection);
    setDatePickerVisible(false);
    if (!hasSelectedDate) {
      setHasSelectedDate(true);
    }
  };

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDatePicker}
        className="text-[12px] font-[500] rounded-[8px] border border-[#D0D0D0] text-[#3A3A3A] px-4 py-2 flex items-center gap-2"
      >
        <LuCalendarDays size={16} />
        {!hasSelectedDate
          ? 'Date Range'
          : `${
              selectedDateRange.startDate && selectedDateRange.endDate
                ? `${format(
                    selectedDateRange.startDate,
                    'MMM d, yyyy',
                  )} - ${format(selectedDateRange.endDate, 'MMM d, yyyy')}`
                : 'Invalid Date Range'
            }`}
      </button>

      {isDatePickerVisible && (
        <div className="absolute z-10 right-0">
          <DateRange
            ranges={[selectedDateRange]}
            onChange={handleDateRangeChange}
            editableDateInputs={true}           
          />
        </div>
      )}
    </div>
  );
}
