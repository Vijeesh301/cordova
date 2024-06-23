/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const NavSection = ({ mouseEnter }) => {
  const menuItems = [
    {
      id: 1,
      name: "Weather",
      link: "/weather",
    },
    {
      id: 2,
      name: "To-Do",
      link: "/todo",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.grey",
      }}
    >
      {menuItems.map((data, i) => {
        return (
          <>
            <Link to={`${data.link}`} key={i}>
              <div className="flex">
                <ListItemButton>
                  <ListItemIcon className="!ml-[-7px] m-[5px] !min-w-[0px]">
                    {data.id === 1 ? (
                      <ThermostatIcon className="!text-[19px] !w-[25px]" />
                    ) : (
                      <FormatListBulletedIcon className="!text-[19px] !w-[25px]" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    className="!ml-[17px]"
                    primary={
                      <Typography
                        className={`!text-[15px] ${
                          mouseEnter === false && "hidden"
                        }`}
                      >
                        {data.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </div>
            </Link>
          </>
        );
      })}
    </Box>
  );
};

export default NavSection;
