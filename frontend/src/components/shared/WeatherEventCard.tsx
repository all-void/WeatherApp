import React from "react";
import { IconType } from 'react-icons'; 


type Props = {
  Icon: IconType // React icon component
  label: string; // Event ka naam (e.g., Humidity, Wind Speed)
  data: string| undefined; // Event ka data (e.g., "41%" ya "15 km/h")
};

const WeatherEventCard = ({ Icon, label, data }: Props) => {

  return (
    <div className="flex flex-col items-center gap-2 ">
      <p className="">{label}</p>
      <Icon/>
      <p className="">{data}</p>
    </div>
  );
};

export default WeatherEventCard;
