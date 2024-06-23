import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../../Dashboard/ManiLayout";

export const useWeather = () => {
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=";

  const API_KEY = "66dae488fafffc77ff235e59dbb4f427";

  const currentDate = new Date().toLocaleDateString("en-CA");

  const { details } = useData();

  const [popupOpen, setPopupOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [cityName, setCityName] = useState("");

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // POPUP CLOSE
  const handleClose = () => {
    setPopupOpen(!popupOpen);
  };

  // FETCH DATA - API
  const getWeatherData = async () => {
    setLoading(true);
    try {
      const resp = await axios
        .get(`${URL}${cityName}&appid=${API_KEY}`)
        .then((res) => {
          if (res?.status === 200) {
            setCityName("");
            setLoading(false);
            details(res.data);
          }
          return res;
        });
      return resp;
    } catch (err) {
      details(err);
      setLoading(false);
      return err;
    }
  };

  return {
    popupOpen,
    handleClose,
    getWeatherData,
    loading,
    currentTime,
    cityName,
    setCityName,
    currentDate,
  };
};
