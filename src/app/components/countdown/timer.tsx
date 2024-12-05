"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-29T00:00:00");

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto grid w-full max-w-xl grid-cols-4 gap-1">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="rounded-lg bg-white bg-opacity-10 p-2">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-lg capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}
