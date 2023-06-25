import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Parallax } from "react-scroll-parallax";

import { useDarkMode } from "../../../hooks/useDarkMode";
import { joinClass } from "../../../helpers/utils";
import { homeMessages } from "../../../messages/home";
import { ProfileCard } from "../../profileCard";
import { Background } from "../../background";

import classes from "./about.module.scss";

const experience = [
  {
    id: 1,
    institute: "QBurst",
    startDate: "Feb 2022",
    endDate: "Present",
    designation: "Software Engineer",
    worksDone: [
      "Spearheaded the development of a high-traffic Ecommerce SPA application for a renowned Japanese fashion retail giant with global presence, prioritizing seamless user experiences and customer satisfaction across diverse markets.",
      "Successfully collaborated with a diverse, multinational team on various epics and bug fixes, leveraging collective expertise to deliver exceptional results.",
      "Managed a significant number of Jira tickets with precision, showcasing exceptional organizational skills and attention to detail.",
      "Took ownership of technical debt test-case tickets, significantly improving test coverage and elevating the coverage to an impressive 95% from 65%.",
      "Actively participated in cross-functional meetings, providing valuable insights and ensuring alignment between stakeholders.",
      "Generated user-friendly documentation, simplifying the deployment process and enabling team members to navigate with ease.",
    ],
  },
  {
    id: 2,
    institute: "QBurst",
    startDate: "Aug 2021",
    endDate: "Feb 2022",
    designation: "Module Lead",
    worksDone: [
      "Contributed to a medium-scale project with a Japanese client, serving as the Project-In-Charge (PIC) for building a custom UI-Component Library for a hotel management tool. Led a team of three junior developers to create over two dozen reusable and responsive components, meeting the specific requirements of the client.",
      "Collaborated with a cross-functional team to develop a high-performance Content Management System (CMS) for a prominent travel hotel booking company. This powerful CMS facilitated efficient management of an extensive hotel portfolio, ensuring a seamless booking experience for travelers.",
      "Crafted multiple project estimations and proposals tailored specifically for potential Japanese clients, leveraging deep understanding of their unique business needs and preferences.",
      "Ignited growth and expertise in web development through personalized mentorship programs for both freshers and experienced lateral entry employees. Delivered cutting-edge techniques and stacks, empowering individuals across India and Japan to elevate their skills and thrive in the ever-evolving landscape of web development. ",
    ],
  },
  {
    id: 3,
    institute: "QBurst",
    startDate: "Sep 2020",
    endDate: "Aug 2021",
    designation: "Junior Software Engineer",
    worksDone: [
      "Developed a custom React.JS UI-Component Library, creating reusable and responsive components used in multiple internal projects.",
      "Started as a junior developer and advanced to become the Project-in-Charge (PIC) for an Email Newsletter Builder SPA. Led the development of a user-friendly drag-and-drop interface, enabling effortless creation and editing of HTML templates, along with advanced features for scheduling, sending emails, and managing users.",
    ],
  },
  {
    id: 4,
    institute: "IIT-BHU",
    startDate: "June 2019",
    endDate: "Aug 2019",
    designation: "Trainee",
    worksDone: [
      "Worked on designing, simulating and testing of Meta-Surface based Antennas for radio frequency wireless communication.",
      <span key="pub1">
        One of my first works was approved and published in the{" "}
        <a
          style={{ textDecoration: "underline" }}
          target="blank"
          href="https://www.springerprofessional.de/en/dual-band-fss-backed-printed-antenna-with-fractal-geometry-for-w/18830738"
        >
          {" "}
          7th international conference on Computer and devices for Communication
          (CODEC)
        </a>{" "}
        held on December, 2019
      </span>,
      <span key="pub2">
        Later on I came up with my second prototype and was published in{" "}
        <a
          style={{ textDecoration: "underline" }}
          target="blank"
          href="https://ieeexplore.ieee.org/document/9113517"
        >
          {" "}
          2020 URSI Regional Conference on Radio Science (IEEE)
        </a>
        .
      </span>,
    ],
  },
];
const education = [
  {
    institute: "Graduation",
    startDate: "2016",
    endDate: "2020",
    designation:
      "Engineering in EC @ Government Engineering College, Bartonhill, Trivandrum",
  },
  {
    institute: "Higher Secondary",
    startDate: "2013",
    endDate: "2015",
    designation: "Computer Science @ Central Board of Secondary Education",
  },
];

export const About = () => {
  const { isDarkMode } = useDarkMode();
  const today = new Date();
  const birthDate = new Date("1997-09-18");
  const years = today.getFullYear() - birthDate.getFullYear();
  const months = today.getMonth() - birthDate.getMonth();
  const age = Math.floor(years + months / 12);
  const [experienceTabValue, setExperienceTabValue] = useState(1);
  const [educationTabValue, setEducationTabValue] = useState(1);
  const handleExperienceTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setExperienceTabValue(newValue);
  };
  const handleEducationTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setEducationTabValue(newValue);
  };
  const InfoText = ({ title, content }: { title: string; content: string }) => (
    <Typography
      sx={{ margin: "0.5rem", color: isDarkMode ? "#afafaf" : "#353535" }}
      component="p"
    >
      {title}{" "}
      <Typography
        component="span"
        sx={{ color: isDarkMode ? "white" : "black", fontWeight: "600" }}
      >
        {content}
      </Typography>
    </Typography>
  );
  const currentExperience = experience.find(
    (item) => item.id === experienceTabValue
  );
  return (
    <Box
      className={joinClass(classes.about__container)}
      sx={{
        ...(isDarkMode && {
          border: "solid 1px #2f2f2fc4",
          boxShadow: "0 0 1rem #00000078",
        }),
      }}
    >
      <Background />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          color: isDarkMode ? "#696969" : "#353839aa",
          fontWeight: "800",
        }}
      >
        <Parallax
          easing={"easeInOut"}
          opacity={[0.3, 1]}
          translateX={["-50%", "0%"]}
        >
          <p>Somethings about me</p>
        </Parallax>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Parallax
          easing="easeInOut"
          opacity={[0.5, 1]}
          translateX={["20%", "0%"]}
        >
          <Typography
            className={classes.about__title}
            sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}
          >
            About Me
          </Typography>
        </Parallax>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "xx-large",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Personal Informations
          </Typography>
          <Grid container>
            <Grid item xs={12} md={5} sx={{ margin: "1rem" }}>
              <InfoText title="First Name: " content="Anand" />
              <InfoText title="Last Name: " content="Krishnan M J" />
              <InfoText
                title="Address: "
                content="695571, Trivandrum, Kerala"
              />
              <InfoText title="From: " content="🇮🇳 India" />
            </Grid>
            <Grid item xs={12} md={5} sx={{ margin: "1rem" }}>
              <InfoText title="Age: " content={`${age} years`} />
              <InfoText title="Phone: " content={`+91 7907614429`} />
              <InfoText title="E-Mail: " content={`anandkrishmj@gmail.com`} />
              <InfoText
                title="Languages: "
                content={`English, Malayalam, Hindi`}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{ display: "flex", marginTop: "1rem", justifyContent: "center" }}
        >
          <Link
            sx={{
              color: isDarkMode ? "white" : "black",
              textDecoration: "none",
            }}
            href="https://drive.google.com/uc?id=1y88Vas0fdeVwE9FNSx1gf6Q-myFftKdX&export=download"
            target="_blank"
          >
            <Button
              variant="contained"
              sx={{ color: "white", marginBottom: "1rem" }}
            >
              Download CV
              <DownloadIcon sx={{ marginLeft: "0.5rem" }} />
            </Button>
          </Link>
        </Box>
        <Box
          sx={{ display: "flex", marginTop: "1rem", justifyContent: "center" }}
        >
          <Link
            sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
            href="https://twitter.com/ANANDKRISHNAN6"
            target="_blank"
          >
            <TwitterIcon sx={{ fontSize: "2rem" }} />
          </Link>
          <Link
            sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
            href="https://www.linkedin.com/in/anand-krishnan-mj-a6332b154/"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: "2rem" }} />
          </Link>
          <Link
            sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
            href="https://www.facebook.com/anandkrishnan.anandkrishnan"
            target="_blank"
          >
            <FacebookIcon sx={{ fontSize: "2rem" }} />
          </Link>
          <Link
            sx={{ margin: "0.5rem", color: isDarkMode ? "white" : "black" }}
            href="https://github.com/Anand-Krishnan-M-J"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: "2rem" }} />
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          color: isDarkMode ? "#696969" : "#353839aa",
          fontWeight: "800",
        }}
      >
        <Parallax opacity={[0, 1]} translateX={["-50%", "0%"]}>
          <p>Check Out My Resume</p>
        </Parallax>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Parallax
          easing="easeInOut"
          opacity={[0.5, 1]}
          translateX={["20%", "0%"]}
        >
          <Typography
            className={classes.about__title}
            sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}
          >
            My Resume
          </Typography>
        </Parallax>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <Box sx={{ margin: "1rem", display: "flex", justifyContent: "center" }}>
          <ProfileCard />
        </Box>
        <Box
          sx={{
            margin: "1rem",
            maxWidth: "800px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ marginBottom: "1rem" }}>
            {homeMessages.aboutPara1}
          </Typography>
          <Typography>{homeMessages.aboutPara2}</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ minHeight: "320px" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              className={classes["experience--desktop"]}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                maxWidth: "1200px",
                margin: "auto",
              }}
            >
              <Typography className={classes.experience__title}>
                Experience
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Tabs
                  orientation="vertical"
                  value={experienceTabValue}
                  onChange={handleExperienceTabChange}
                  TabIndicatorProps={{ style: { width: "2px" } }}
                  sx={{
                    ".MuiTabs-indicator": {
                      left: 0,
                    },
                    margin: "1rem",
                    borderLeft: `solid 1px ${
                      isDarkMode ? "#696969" : "#353839aa"
                    }`,
                  }}
                >
                  {experience.map((item, index) => (
                    <Tab
                      key={`expTab-${index}`}
                      sx={{
                        minWidth: "1rem",
                        color: isDarkMode ? "#696969" : "#353839aa",
                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                      value={item.id}
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            position: "relative",
                          }}
                        >
                          <Typography fontSize={"1.1rem"} fontWeight="600">
                            {item.designation}
                          </Typography>
                          <Typography>{item.institute}</Typography>
                        </Box>
                      }
                    />
                  ))}
                </Tabs>
                {
                  <Box sx={{ maxWidth: "70%", marginTop: "1rem" }}>
                    <List sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{ marginTop: "0.2rem", marginBottom: "1rem" }}
                      >{`${currentExperience?.startDate} - ${currentExperience?.endDate}`}</Typography>

                      {currentExperience?.worksDone.map((item, index) => (
                        <Box
                          key={`expListTab-${index}`}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                          }}
                        >
                          <ListItemIcon>
                            <CircleIcon
                              sx={{
                                width: "0.9rem",
                                color: isDarkMode ? "#696969" : "#353839aa",
                                marginTop: "0.5rem",
                              }}
                              fontSize="small"
                            />
                          </ListItemIcon>
                          <ListItemText
                            sx={{ marginLeft: "-1rem" }}
                            primary={item}
                          />
                        </Box>
                      ))}
                    </List>
                  </Box>
                }
              </Box>
            </Box>
            <Box className={classes["experience--mobile"]}>
              <Typography
                className={classes.experience__title}
                sx={{ margin: "0rem 0rem 1rem 0rem" }}
              >
                Experience
              </Typography>
              {experience.map((item, index) => (
                <Box key={`expMobTab-${index}`}>
                  <Accordion
                    sx={{
                      backgroundColor: isDarkMode ? "#29292930" : "#a1cdff1c",
                      boxShadow: "0rem 0rem 0.1rem grey",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: isDarkMode ? "#a1a1a1" : "#353839aa",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ color: "inherit" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "600",
                            fontSize: "1.2rem",
                            color: isDarkMode ? "#a1a1a1" : "#353839aa",
                          }}
                        >
                          {`${item.designation}`}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "0.9rem",
                            color: isDarkMode ? "#a1a1a1" : "#353839aa",
                          }}
                        >
                          {item.institute} ({item?.startDate} - {item?.endDate})
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {item.worksDone.map((item, index) => (
                          <Box
                            key={`expMobListTab-${index}`}
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            <ListItemIcon>
                              <CircleIcon
                                sx={{
                                  width: "0.8rem",
                                  color: isDarkMode ? "#a1a1a1" : "#353839aa",
                                  marginTop: "0.5rem",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              sx={{
                                color: isDarkMode ? "#a1a1a1" : "#353839aa",
                                marginLeft: "-1.5rem",
                              }}
                              primary={item}
                            />
                          </Box>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              className={classes["experience--desktop"]}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: "1200px",
                flexDirection: "column",
                margin: "auto",
                marginTop: "1.5rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "xx-large",
                  fontWeight: "600",
                }}
              >
                Education
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Tabs
                  orientation="vertical"
                  value={educationTabValue}
                  onChange={handleEducationTabChange}
                  TabIndicatorProps={{ style: { width: "2px" } }}
                  sx={{
                    ".MuiTabs-indicator": {
                      left: 0,
                    },
                    margin: "1rem",
                    borderLeft: `solid 1px ${
                      isDarkMode ? "#696969" : "#353839aa"
                    }`,
                  }}
                >
                  {education.map((item, index) => (
                    <Tab
                      key={`eduTabDesk-${index}`}
                      sx={{
                        minWidth: "1rem",
                        width: "8rem",
                        fontSize: "1.1rem",
                        textTransform: "none",
                        fontWeight: "600",
                        color: isDarkMode ? "#696969" : "#353839aa",
                      }}
                      label={item.institute}
                    />
                  ))}
                </Tabs>
                {
                  <Box sx={{ maxWidth: "70%", marginLeft: "2rem" }}>
                    <Typography
                      component="h2"
                      fontWeight="600"
                      fontSize="1.5rem"
                    >
                      {education[educationTabValue].designation}
                    </Typography>
                    <Typography
                      sx={{ marginTop: "0.2rem", marginBottom: "1rem" }}
                    >
                      {`${education[educationTabValue].startDate} - ${education[educationTabValue].endDate}`}
                    </Typography>
                  </Box>
                }
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ marginTop: "1.5rem" }}
            className={classes["experience--mobile"]}
          >
            <Typography
              className={classes.experience__title}
              sx={{ margin: "0rem 0rem 1rem 0rem" }}
            >
              Educaton
            </Typography>
            {education.map((item, index) => (
              <Box key={`eduMobTab-${index}`}>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.institute}
                </Typography>
                <Typography>{item.designation}</Typography>
                <Typography sx={{ marginTop: "0.2rem", marginBottom: "1rem" }}>
                  {`${item.startDate} - ${item.endDate}`}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
