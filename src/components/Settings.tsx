import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button} from "@/components/ui/button";


const settings = {
  time: 25,
  interval: 4,
  pauseTime: 5,
  sound: "light",
};

const onSave = (settings: any) => {
  console.log("saving");
};

const Settings = () => {
  const [time, setTime] = useState(settings.time);
  const [interval, setInterval] = useState(settings.interval);
  const [pauseTime, setPauseTime] = useState(settings.pauseTime);
  const [selectedSound, setSelectedSound] = useState(settings.sound);

  const handleSave = () => {
    onSave({ time, interval, pauseTime, sound: selectedSound });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Settings</h2>
      <div className="mb-4">
        <label htmlFor="time" className="block font-medium mb-2">
          Time (minutes)
        </label>
        <input
          type="number"
          id="time"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="interval" className="block font-medium mb-2">
          Interval (minutes)
        </label>
        <input
          type="number"
          id="interval"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={interval}
          onChange={(e) => setInterval(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pauseTime" className="block font-medium mb-2">
          Pause Time (minutes)
        </label>
        <input
          type="number"
          id="pauseTime"
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={pauseTime}
          onChange={(e) => setPauseTime(parseInt(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sound" className="block font-medium mb-2">
          Sound
        </label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};

export default Settings;
