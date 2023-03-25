import React from 'react';
import Image from 'next/image';
import { Box, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Background } from '../../background';
import CircleIcon from '@mui/icons-material/Circle';
import idea from "../../../assets/images/idea.png";
import classes from "./skills.module.scss";
import { Parallax } from 'react-scroll-parallax';

const skills = [
  "Javascript", "HTML/CSS", "React JS",
  "Next JS", "Sass", "Material-UI",
  "Webpack", "Rollup", "Storybook",
  "Node JS", "Express JS", "Docker",
  "PostgreSQL", "LocalStack", "Git",
  "Visual Studio Code"
];

export const Skills = () => {
  const { isDarkMode } = useDarkMode();

  const middleIndex = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, middleIndex);
  const secondHalf = skills.slice(-middleIndex);

  return (
    <Box
      className={joinClass(classes.skills__container)}
      sx={{
        position: 'relative',
        borderRadius: "1rem",
        backgroundColor: isDarkMode && "#ffffff04",
        ...isDarkMode && {
          border: 'solid 1px #2f2f2fc4',
          boxShadow: '0 0 1rem #00000078'
        },
      }}
    >
      <Background />

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        className={classes.shortDescription}
      >
        <Parallax easing={"easeInOut"} opacity={[0.3, 1]} translateX={['-50%', '0%']}>
          <p style={{ color: isDarkMode ? "#696969" : "#353839aa", fontWeight: "800" }}>Things that I am good at</p>
        </Parallax>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Parallax easing="easeInOut" opacity={[0.5, 1]} translateX={['20%', '0%']}>
          <Typography
            className={classes.skills__title}
            sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}
          >
            My Skills
          </Typography>
        </Parallax>
      </Box>

      <Box className={classes.skills__content__wrapper}>
        <Box sx={{ display: "flex", justifyContent: "center" }} className={classes.image}>
          <Image width={400} height={400} src={idea} alt="Skills" />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <Box sx={{ margin: "1rem" }} >
            {firstHalf.map((item) =>
              <Box key={item} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <ListItemIcon>
                  <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", fontSize: "1rem" }} />
                </ListItemIcon>
                <ListItemText primary={item} />
              </Box>
            )}
          </Box>

          <Box sx={{ margin: "1rem" }} >
            {secondHalf.map((item) =>
              <Box key={item} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <ListItemIcon>
                  <CircleIcon sx={{ color: isDarkMode ? "#696969" : "#353839aa", fontSize: "1rem" }} />
                </ListItemIcon>
                <ListItemText primary={item} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
