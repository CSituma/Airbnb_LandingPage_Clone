'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Minus, Plus } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function SearchBar() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [guests, setGuests] = useState(1);
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (calendarRef.current && !(calendarRef.current as HTMLElement).contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  return (
    <div className="mt-6 w-full max-w-4xl hidden md:block mx-auto p-[2px] box-border bg-white rounded-full border border-gray-200 ring-1 ring-gray-200 hover:ring-2 shadow-lg hover:shadow-xl transition-all relative z-20">
      <div className="flex items-center justify-between text-sm text-gray-800 font-medium overflow-x-auto">
        
        {/* Where */}
        <div className="flex flex-col px-6 py-2 flex-[2] min-w-[200px]">
          <span className="text-sm  font-semibold mb-1">Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent outline-none placeholder-gray-500 text-sm"
          />
        </div>

        {/* Divider */}
        <div className="h-8 w-[2px] bg-gray-300 mx-1" />

        {/* Check in */}
        <div
          className="relative flex flex-col justify-center items-start px-6 py-2 flex-[1] cursor-pointer"
          onClick={() => setShowCalendar(true)}
        >
          <span className="text-sm font-semibold mb-1">Check in</span>
          <span className="text-sm text-gray-600">
            {format(dateRange[0].startDate, 'MMM d')}
          </span>
        </div>

        {/* Divider */}
        <div className="h-8 w-[2px] bg-gray-300 mx-1" />

        {/* Check out */}
        <div
          className="relative flex flex-col justify-center items-start px-6 py-2 flex-[1] cursor-pointer"
          onClick={() => setShowCalendar(true)}
        >
          <span className="text-sm font-semibold mb-1">Check out</span>
          <span className="text-sm text-gray-600">
            {format(dateRange[0].endDate, 'MMM d')}
          </span>
        </div>

        {/* Divider */}
        <div className="h-8 w-[2px] bg-gray-300 mx-1" />
        {/* Who */}
        <div className="flex items-center justify-between px-6 py-2 flex-[1.2] min-w-[150px]">
          <div>
            <span className="text-sm text-gray-700 font-semibold mb-1 block">Who</span>
            <span className="text-sm text-gray-600">
              {guests} guest{guests > 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="w-6 h-6 rounded-full border text-gray-700 flex items-center justify-center hover:bg-gray-100"
            >
              <Minus className="h-3 w-3" />
            </button>
            <button
              onClick={() => setGuests((g) => g + 1)}
              className="w-6 h-6 rounded-full border text-gray-700 flex items-center justify-center hover:bg-gray-100"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Search button */}
        <div className="pl-3 pr-4">
          <button className="bg-[#FF385C] hover:bg-[#E31C5F] text-white p-2 rounded-full">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Calendar dropdown */}
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 bg-white rounded-lg shadow-lg"
        >
          <DateRange
            editableDateInputs
            onChange={(item) => {
              const { startDate, endDate } = item.selection;
              setDateRange([
                {
                  startDate: startDate ?? new Date(),
                  endDate: endDate ?? new Date(),
                  key: 'selection',
                },
              ]);
            }}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            rangeColors={['#FF385C']}
            months={2}
            direction="horizontal"
          />
        </div>
      )}
    </div>
  );
}
