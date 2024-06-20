import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

const PomodoroTimer = () => {
  const [time, setTime] = useState(1 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-8">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      <div className="flex space-x-4">
        <Button onClick={handleStart}>
          <FaPlay className="pr-2 text-xl" /> Start
        </Button>
        <Button variant="secondary" onClick={handlePause}>
          <FaPause className="pr-2 text-xl" />Pause
        </Button>
        <Button variant="destructive" onClick={handleReset}>
          <FaStop className="pr-2 text-xl" />Reset
        </Button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
