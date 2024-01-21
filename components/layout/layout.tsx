import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import { Background } from "../background";

import Header from "./header/header";
import classes from "./layout.module.scss";
import { ScrollHeader } from "./scrollHeader/scrollHeader";

const iconStyle = {
  color: "#2753d7",
  fontSize: "3rem",
  padding: "0.5rem",
};
export const DarKModeContext = React.createContext({
  isDarkMode: false,
  darkModeIsloading: true,
});

function Layout({ children, variant, title }: LayoutPropType) {
  const [isDarkMode, setIsDarkMode] = useState("");
  useEffect(() => {
    if (!window?.sessionStorage?.getItem("isDarkMode")) {
      window?.sessionStorage?.setItem("isDarkMode", "true");
      setIsDarkMode("true");
    }
    const isDark: string = window?.sessionStorage?.getItem("isDarkMode") as any;
    setIsDarkMode(isDark);
    isDark === "true" && document.body.classList.add("dark-mode");
  }, []);
  const onButtonToggle = () => {
    window.sessionStorage.setItem(
      "isDarkMode",
      isDarkMode === "false" ? "true" : "false",
    );
    setIsDarkMode((isDarkMode) => (isDarkMode === "false" ? "true" : "false"));
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      {variant === "l1" && (
        <DarKModeContext.Provider
          value={{
            isDarkMode: isDarkMode === "true" ? true : false,
            darkModeIsloading: isDarkMode === "",
          }}
        >
          <Box>
            <main className={classes.main}>{children}</main>
            <Header onDarkModeToggle={onButtonToggle} />
          </Box>
        </DarKModeContext.Provider>
      )}
      {variant === "l2" && (
        <DarKModeContext.Provider
          value={{
            isDarkMode: isDarkMode === "true" ? true : false,
            darkModeIsloading: isDarkMode === "",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.3rem",
              marginBottom: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                margin: "1rem",
                alignItems: "center",
              }}
            >
              {title === "Blogs" && <RssFeedIcon sx={iconStyle} />}
              {title === "Projects" && <BusinessCenterIcon sx={iconStyle} />}
              <Typography
                sx={{ fontSize: "x-large", fontWeight: "600" }}
                className={classes.sub_layout_title}
              >
                {title === "Projects" ? "Things I have built" : title}
              </Typography>
            </Box>

            <Box sx={{ width: "1400px", maxWidth: "100%" }}>
              <main className={classes.main}>{children}</main>
            </Box>
          </Box>
          <input
            checked={isDarkMode === "true" ? true : false}
            className={classes.toggle}
            type="checkbox"
            onChange={onButtonToggle}
          />
        </DarKModeContext.Provider>
      )}
      {variant === "l3" && (
        <DarKModeContext.Provider
          value={{
            isDarkMode: isDarkMode === "true" ? true : false,
            darkModeIsloading: isDarkMode === "",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                padding: "0.3rem",
                marginBottom: "1.5rem",
                flexDirection: "column",
              }}
            >
              <ScrollHeader
                onDarkModeToggle={onButtonToggle}
                hideToggle={false}
              />
              <Box>
                <main className={classes.main_l3}>{children}</main>
              </Box>
            </Box>
            <Background />
          </Box>
        </DarKModeContext.Provider>
      )}
    </>
  );
}

interface LayoutPropType {
  children: JSX.Element;
  variant: "l1" | "l2" | "l3";
  title?: "Blogs" | "Projects";
}

export default Layout;
