import { useEffect, useState } from "react";

//icons
import { clould, fog, rain, snow, storm, sun, windy } from "../assets/icons";

function MiniCard({ time, temp, iconString }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const availableIcons = [clould, fog, rain, snow, storm, sun, windy];
    if (iconString) {
      const lowerCaseIconString = iconString.toLowerCase();
      if (lowerCaseIconString.includes("cloud")) {
        setIcon(clould);
      } else if (lowerCaseIconString.includes("rain")) {
        setIcon(rain);
      } else if (lowerCaseIconString.includes("clear")) {
        setIcon(sun);
      } else if (lowerCaseIconString.includes("thunder")) {
        setIcon(storm);
      } else if (lowerCaseIconString.includes("fog")) {
        setIcon(fog);
      } else if (lowerCaseIconString.includes("snow")) {
        setIcon(snow);
      } else if (lowerCaseIconString.includes("wind")) {
        setIcon(windy);
      } else {
        // If the iconString doesn't match any known conditions, select a random icon
        const randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)];
        setIcon(randomIcon);
      }
    }
  }, [iconString]);

  return (
    <div className="glassCard w-[11rem] h-[12rem] p-4 flex flex-col">
      <p className="text-center">
        {time &&
          new Date(time)
            ?.toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]}
      </p>
      <hr className="mt-4" />
      <div className="w-full flex justify-center items-center flex-1">
        <img
          src={icon || sun} // Using a default icon if 'icon' is null
          alt="forecast not available"
          className="w-[4rem] h-[4rem]"
        />
      </div>
      <p className="text-center font-bold">{temp} &deg;C</p>
    </div>
  );
}

export default MiniCard;
