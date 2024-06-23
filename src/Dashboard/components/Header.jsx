/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Typography, Box, Toolbar, AppBar, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#ebebfc", boxShadow: "none" }}>
        <Toolbar className="!ml-[-9px]">
          <img width="32px" height="auto" alt="logo" />
          <Link to="/home" className="no-underline">
            <Grid className="!w-[200%]">
              <Typography
                sx={{
                  ml: "13px",
                  color: "#2F2A42",
                  fontWeight: "bold",
                  flexGrow: 1,
                  display: {
                    md: "block",
                    sm: "block",
                    xs: "none",
                    lightingColor: "block",
                  },
                }}
                component="div"
              >
                Machine Test
              </Typography>
            </Grid>
          </Link>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginY: "6px",
                  textAlign: "end",
                  marginRight: "5px",
                }}
              >
                <Typography
                  className="!text-[14px] !text-[#2F2A42] !font-bold cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Vijeesh
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
