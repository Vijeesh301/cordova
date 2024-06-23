import { Button, Grid, Typography, Card } from "@mui/material";
import { useLanding } from "./useLanding";
import { TailSpin } from "react-loader-spinner";
import bg_img from "../../assets/images/bg-img.jpg";

const Landing = () => {
  const { loaderFunction, loader } = useLanding();
  return (
    <>
      <Grid
        className="main_page !h-svh flex items-center justify-center"
        sx={{ backgroundImage: `url(${bg_img})` }}
      >
        <Card className="opacity-75 !bg-[#d7d9f9] !w-[50%] !h-[30%] flex justify-center items-center">
          <Grid>
            <Typography className="!text-center !text-[16px] !font-bold">
              Weather Forecast
            </Typography>
            <Typography className="!mt-3 !text-center !text-[12px] !font-bold">
              Vijeesh V
            </Typography>
            <Button
              fullWidth
              className="!bg-[#023334] !mt-3"
              variant="contained"
              onClick={loaderFunction}
            >
              {loader ? (
                <TailSpin
                  height={24.5}
                  width={37}
                  color="#ffff"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={3}
                  strokeWidthSecondary={3}
                />
              ) : (
                "VIEW"
              )}
            </Button>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Landing;
