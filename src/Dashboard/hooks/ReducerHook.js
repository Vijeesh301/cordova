export const ActionTypes = {
  WEATHER_DATA: "WEATHER_DATA",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.WEATHER_DATA:
      return { ...state, weatherData: action.payload };
    default:
      return action.type;
  }
};
