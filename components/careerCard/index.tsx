import React from "react";
import { Box, Typography } from "@mui/material";

import { useDarkMode } from "../../hooks/useDarkMode";

import classes from "./styles.module.scss";

export const CareerCard = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      sx={{
        position: "relative",
        boxShadow: "0 0 6px rgb(46 43 43 / 85%)",
        ...(isDarkMode && { backgroundColor: "#141212" }),
        ...(!isDarkMode && {
          backgroundImage:
            "linear-gradient(to right, #c1deff,#c1deff,#c1deff,#a1cdff ,#a1cdff )",
        }),
        border: "solid 4px #2753d7",
        borderRadius: "0.5rem",
        paddingBottom: "1rem",
        margin: "1rem",
        paddingRight: "0.5rem",
      }}
    >
      <Box className={classes.base}></Box>
      <Typography sx={{ marginLeft: "2.5rem", marginTop: "-1.3rem" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
