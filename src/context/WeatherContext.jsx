import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [place, setPlace] = useState("banglore");
  const [location, setLocation] = useState("");

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "5670e6c33fmshf26a04e0e94acbcp1d0cdejsn47b46bbed35a",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      setIsLoading(true)
      const response = await axios.request(options);
      const weatherData = Object.values(response?.data?.locations)[0];
      setLocation(weatherData.address);
      setValues(weatherData.values);
      setWeather(weatherData.values[0]);
      toast.success(`Weather fetched for ${place}`);
      setIsLoading(false)
    } catch (error) {
      toast.error("This place does not exist");
      setIsLoading(false)
      
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  const value = {
    isLoading,
    weather,
    setPlace,
    values,
    location,
    place,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
