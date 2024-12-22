import React from 'react';
import { IconType } from 'react-icons'; 

type Props = {
  Icon: IconType; // Icon component passed
  label: string; // Sunrise/Sunset
  time: string | undefined; 
};

const SunTimeCard = ({ Icon, label, time }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center ">
      {/* Icon */}
      <Icon className="text-yellow-300" />
      
      {/* Label and Time */}
      <div className="flex flex-col gap-1">
        <p className=" ">{label}</p>
        <p className="">{time}</p>
      </div>
    </div>
  );
};

export default SunTimeCard;
