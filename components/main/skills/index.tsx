import React from "react";
import Image from "next/image";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

import { joinClass } from "../../../helpers/utils";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Background } from "../../background";
import skills from "../../../constants/skills";

import classes from "./skills.module.scss";

export const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const [value, setValue] = React.useState(0);
  /* eslint-disable */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Box
      className={joinClass(classes.skills__container)}
      sx={{
        position: "relative",
        borderRadius: "1rem",
        backgroundColor: isDarkMode ? "#ffffff04" : "",
        ...(isDarkMode && {
          border: "solid 1px #2f2f2fc4",
          boxShadow: "0 0 1rem #00000078",
        }),
      }}
    >
      <Background />

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        className={classes.shortDescription}
      >
        <Parallax
          easing={"easeInOut"}
          opacity={[0.3, 1]}
          translateX={["-50%", "0%"]}
        >
          <p
            style={{
              color: isDarkMode ? "#696969" : "#353839aa",
              fontWeight: "800",
            }}
          >
            Things that I am good at
          </p>
        </Parallax>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Parallax
          easing="easeInOut"
          opacity={[0.5, 1]}
          translateX={["20%", "0%"]}
        >
          <Typography
            className={classes.skills__title}
            sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}
          >
            My Skills
          </Typography>
        </Parallax>
      </Box>

      <Box className={classes.skills__content__wrapper}
        sx={{ boxShadow: "1px 1px 0.5rem #44444462", borderRadius: '1rem', minHeight: "65vh" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: '#2753d7',
              boxShadow: "0px 0px 3rem #2753d7"
            }
          }}
          centered
          selectionFollowsFocus
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {skills.map(skill =>
            <Tab label={<Typography sx={
              {
                color: isDarkMode ? "white" : "rgb(49, 49, 49)",
                fontWeight: "600"
              }
            }>{skill.tabLabel}</Typography>} />
          )}
        </Tabs>
        <Box className={classes.skills__content}
          sx={{
            margin: 'auto', display: 'flex', padding: "1rem",
            justifyContent: "space-evenly", flexWrap: 'wrap', flexDirection: 'row'
          }}>
          {skills[value].items.map(item => <Box key={item.skillLabel}
            sx={{ width: item.width, maxWidth: item.maxWidth, margin: "auto 1rem auto 1rem", padding: "1rem 0rem" }}>
            <Image
              src={item.src} alt={item.skillLabel}
              layout="responsive"
              loading="eager"
              priority
            />

          </Box>)}
        </Box>
      </Box>
    </Box>
  );
};
