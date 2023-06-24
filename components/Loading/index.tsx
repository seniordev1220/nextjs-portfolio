import { Box } from "@mui/material";
import React from "react";

import { joinClass } from "../../helpers/utils";
import MiniLogo from "../miniLogo";
import { useDarkMode } from "../../hooks/useDarkMode";

import classes from "./styles.module.scss";

export const Loading = ({ sxProp }: { sxProp?: any }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          zIndex: 2000,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          ...sxProp,
        }}
      >
        <MiniLogo />
        <Box
          sx={{
            postition: "relative",
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
          }}
        >
          <div className={classes.dot__loader}></div>
          <div
            className={joinClass(classes.dot__loader, classes.dot__loader__one)}
          ></div>
          <div
            className={joinClass(classes.dot__loader, classes.dot__loader__two)}
          ></div>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: "100vh",
          width: "100%",
          backgroundColor: isDarkMode
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      ></Box>
    </>
  );
};
