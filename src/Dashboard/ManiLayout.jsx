/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { ActionTypes, reducer } from "./hooks/ReducerHook";

const initialState = {
  weatherData: "undefined",
};

const ViewContext = createContext();

export const useData = () => useContext(ViewContext);

const ManiLayout = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const details = (forecastData) => {
    dispatch({ type: ActionTypes.WEATHER_DATA, payload: forecastData });
  };

  return (
    <>
      <ViewContext.Provider value={{ state, details }}>
        {children}
      </ViewContext.Provider>
    </>
  );
};

export default ManiLayout;
