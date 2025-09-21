"use client";

import { useState, useEffect } from 'react';

export function DateBanner() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  if (!currentDate) {
    return null;
  }

  return (
    <div className="bg-[#201119] py-2 text-center text-sm font-bold text-white">
      Desconto só <span className="text-primary">HOJE</span> nessa página <span className="text-primary">{currentDate}</span>
    </div>
  );
}
