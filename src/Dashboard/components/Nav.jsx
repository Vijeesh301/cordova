/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, Typography, Divider } from "@mui/material";
import NavSection from "./NavSection";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// ----------------------------------------------------------------------

const NAV_WIDTH = 290;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ isTrue, setIsTrue, open, setOpen }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  const renderContent = (
    <SimpleBar style={{ maxHeight: "100svh" }}>
      {mouseEnter === true ? (
        <Box className="!px-10 !py-5 !flex m-auto">
          <Link to="/home" className="no-underline">
            <Box className="flex justify-center gap-2 text-center">
              <Box className="flex justify-center items-center">
                <Typography className="!text-[#1A2952] !font-bold !ml-[13px]">
                  Machine Test
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>
      ) : (
        <Box className="!px-5 !py-5 !flex m-auto">
          <Link to="/home" className="no-underline">
            <Box className="flex justify-center gap-2 text-center">
              <Typography>V</Typography>
            </Box>
          </Link>
          <Box
            ml={8}
            onClick={() => {
              setIsTrue(!isTrue);
              setOpen(!open);
            }}
          >
            <KeyboardArrowLeftIcon />
          </Box>
        </Box>
      )}
      <Divider light />

      <NavSection mouseEnter={mouseEnter} />

      <Box sx={{ flexGrow: 1 }} />
    </SimpleBar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0, md: 0, xs: 0 },
        width: {
          lg: mouseEnter === !true ? 50 : NAV_WIDTH,
          md: mouseEnter === !true ? 50 : NAV_WIDTH,
          sm: mouseEnter === !true ? 50 : NAV_WIDTH,
          xs: mouseEnter === !true ? 50 : NAV_WIDTH,
        },
        transition: mouseEnter === !true && "width 1.5s",
        "&:hover": {
          width: mouseEnter === !true ? "50px" : NAV_WIDTH,
        },
      }}
    >
      <Drawer
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        variant="persistent"
        open={isTrue}
        PaperProps={{
          sx: {
            width: mouseEnter === !true ? 50 : NAV_WIDTH,
            bgcolor: "background.default",
            borderRightStyle: "dashed",
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
