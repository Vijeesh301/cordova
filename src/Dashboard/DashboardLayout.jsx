/* eslint-disable react/prop-types */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Nav from "./components/Nav";
import Header from "./components/Header";
import useDashboardLayout from "./hooks/useDashboardLayout";

const APP_BAR_MOBILE = 64;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {},
}));

const DashboardLayout = ({ children }) => {
  const { options, open, setOpen, value, setValue } = useDashboardLayout();

  const onCloseNav = () => {
    setOpen(false);
  };

  const [isTrue, setIsTrue] = useState(true);

  return (
    <StyledRoot>
      <Header
        setOpen={setOpen}
        open={open}
        value={value}
        setValue={setValue}
        options={options}
        isTrue={isTrue}
        setIsTrue={setIsTrue}
      />
      <Nav
        openNav={open}
        onCloseNav={onCloseNav}
        isTrue={isTrue}
        setIsTrue={setIsTrue}
        setOpen={setOpen}
        open={open}
      />
      <Main>
        <Outlet />
        {children}
      </Main>
    </StyledRoot>
  );
};

export default DashboardLayout;
