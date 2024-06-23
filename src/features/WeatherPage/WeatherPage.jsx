/* eslint-disable react/no-children-prop */
import {
  Card,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  CardContent,
} from "@mui/material";
import main_bg from "../../assets/images/bg-2.jpg";
import { useData } from "../../Dashboard/ManiLayout";
import moment from "moment";
import { TailSpin } from "react-loader-spinner";
import { useWeather } from "./useWeather";

const WeatherPage = () => {
  const {
    getWeatherData,
    loading,
    currentTime,
    cityName,
    setCityName,
    currentDate,
  } = useWeather();

  const { state } = useData();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <TextField
            fullWidth
            label="City Name"
            size="small"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Button
            disabled={cityName ? false : true}
            variant="outlined"
            className="!bg-[#023334] !text-[#fff]"
            onClick={() => getWeatherData()}
          >
            {loading ? (
              <TailSpin
                height={24}
                width={37}
                color="#ffff"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={3}
                strokeWidthSecondary={3}
              />
            ) : (
              "View"
            )}
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          {moment(currentDate).format("DD-MM-YYYY")}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          {currentTime.toLocaleTimeString()}
        </Grid>
      </Grid>
      {state?.weatherData?.name === "AxiosError" && (
        <Grid container spacing={1} className="!mt-2">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography className="!text-center !mt-[10%] !text-[red]">
              Data Not Found
            </Typography>
          </Grid>
        </Grid>
      )}
      {state?.weatherData === "undefined" ? (
        <Grid container spacing={1} className="!mt-2">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography className="!text-center !mt-[10%] !text-[red]">
              Please enter the city name
            </Typography>
          </Grid>
        </Grid>
      ) : state?.weatherData?.name !== "AxiosError" ? (
        <Grid container spacing={1} className="!mt-2">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card
              className="main_page opacity-75 min-h-[32rem]"
              sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 180, 0.5), rgba(90, 0, 0, 0.5)), url(${main_bg})`,
              }}
            >
              <CardContent className="!mt-[10%]">
                <Typography className="!text-center !text-[#fff] !font-bold !text-[28px]">
                  {state?.weatherData?.name}
                </Typography>
                <Typography className="!text-center !text-[#fff] !font-bold !text-[23px]">
                  {parseFloat(state?.weatherData?.main?.temp - 273.15).toFixed(
                    2
                  )}
                </Typography>
                <Typography className="!text-center !text-[#fff] !font-bold !text-[23px]">
                  {state?.weatherData?.weather[0]?.main}
                </Typography>
              </CardContent>
              <Box>
                <Typography className="!my-5 !text-center !text-[#fff]">
                  Max. Temp :{" "}
                  {parseFloat(
                    state?.weatherData?.main?.temp_max - 273.15
                  ).toFixed(2)}
                  , Min. Temp :{" "}
                  {parseFloat(
                    state?.weatherData?.main?.temp_min - 273.15
                  ).toFixed(2)}
                  , Humidity : {state?.weatherData?.main?.humidity}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default WeatherPage;
