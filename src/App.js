import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimesAndLocations from './components/TimesAndLocations';
import TemperatureAndDetail from './components/TemperatureAndDetail';
import Forecast from './components/Forecast';
import getWeatherData from './Services/weatherService';
import getFormattedWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [query, setQuery] = useState({q: "joensuu"})
  const [units, setUnits] = useState("metric")
  const [weather, setweather] = useState(null)

  useEffect (() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q: "current location.";

      toast.info ("Get weather for " + message);
     await getFormattedWeatherData({...query, units}).then(data => {
      
      toast.success(`Successfully get weather for ${data.name}, ${data.country}.`
      );       
      setweather(data);
     });
    };
  
    fetchWeather();
  }, [query, units]);
     
    const formatBackground = () => {
      if(!weather) return "from-cyan-700 to blue-700"
      const threshold = units === "metric" ? 20 : 60
      if (weather.temp <= threshold) return "from-cyan-700 to blue-700"

      return "from-yellow-700 to-orange-700"
    }

  return (
   <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
    <TopButton setQuery={setQuery} />
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
    
    {weather && (
      <div>
    <TimesAndLocations weather={weather} />
    <TemperatureAndDetail weather={weather} />
    <Forecast title="hourly forecast" items = {weather.hourly} 
    />
    <Forecast title="daily forecast" items = {weather.daily} 
    />
      </div>
    )}

    <ToastContainer autoClose={5000} them="colored" newestOnTop ={true} />

   </div>
  );
}

export default App;
