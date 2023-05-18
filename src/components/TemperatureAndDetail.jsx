import React from 'react'
import sunImage from "../Assets/sun.png";
import {AiOutlineArrowUp} from "react-icons/ai";
import {AiOutlineArrowDown} from "react-icons/ai";
import {TbTemperature} from "react-icons/tb";
import {FiSun} from "react-icons/fi";
import {BsSunset} from "react-icons/bs";
import {WiHumidity} from "react-icons/wi";
import {BsWind} from "react-icons/bs";
import { formatToLocalTime, iconUrlFromCode } from '../Services/weatherService';


function TemperatureAndDetail({ weather: {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) {
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-xl text-cyan-300"
    >
    <p>{details}</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3">
      <img src={iconUrlFromCode(icon)} 
      alt="Sun" 
      className="w-20">
      </img>
      <p className="text-5xl">{`${temp.toFixed()}°`}</p>
      <div className="flex flex-col space-y-2">

        <div className="flex font-light text-sm items-center justify-center"> 
        <TbTemperature size = {18} className="mr-1" />
          Real felt:
          <span className ="font-medium ml-1">{`${feels_like.toFixed()}°`}</span> 
         </div>
         <div className="flex font-light text-sm items-center justify-center"> 
        <WiHumidity size = {18} className="mr-1" />
          Humidity:
          <span className ="font-medium ml-1">{`${humidity.toFixed()}%`}</span> 
         </div>
         <div className="flex font-light text-sm items-center justify-center"> 
        <BsWind size = {18} className="mr-1" />
          Wind:
          <span className ="font-medium ml-1">{`${speed.toFixed()}km/h`}</span> 
         </div>
        </div>
      </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">

        <FiSun />
        <p className ="font-light"> Rise: 
        <span className="font-medium ml-1"> {formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
       
        
        <BsSunset />
        <p className ="font-light"> Set: 
        <span className="font-medium ml-1"> {formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        <FiSun />
        <p className ="font-light"> High: 
        <span className="font-medium ml-1"> {`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
       
        
        <BsSunset />
        <p className ="font-light"> Low: 
        <span className="font-medium ml-1"> {`${temp_min.toFixed()}°`}</span>
        </p>

      
      </div>
    </div>
  )
}

export default TemperatureAndDetail