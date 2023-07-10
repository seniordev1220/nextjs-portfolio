import React, { useContext, useMemo } from "react";
import {
  Box,
  Tab,
  Tabs,
  Tooltip as MuiToolTip,
  tooltipClasses,
  Zoom,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { styled } from "@mui/material/styles";

import { DarKModeContext } from "../layout";
import { TabContext } from "../../../pages";
import { ScrollHeader } from "../scrollHeader/scrollHeader";

import { RotaryMenu } from "./menu";
import { HeaderProps } from "./headerPropsType";
import classes from "./header.module.scss";

const iconColor = "#2753d7";
function Header({ onDarkModeToggle }: HeaderProps) {
  const { isDarkMode, darkModeIsloading } = useContext(DarKModeContext);
  const { handleTabChange } = useContext(TabContext);
  const routes = useMemo(() => {
    const iconStyle = {
      color: iconColor,
      fontSize: "2rem",
    };
    return [
      {
        name: "Home",
        href: "/",
        IconComponent: <HomeIcon sx={iconStyle} />,
      },
      {
        name: "Portfolio",
        href: "/projects",
        IconComponent: <BusinessCenterIcon sx={iconStyle} />,
      },
      {
        name: "Skills",
        href: "/skills",
        IconComponent: <PsychologyIcon sx={iconStyle} />,
      },
      {
        name: "About",
        href: "/about",
        IconComponent: <PersonIcon sx={iconStyle} />,
      },
      {
        name: "Contact",
        href: "/contact",
        IconComponent: <ContactPhoneIcon sx={iconStyle} />,
      },
    ];
  }, [isDarkMode]);

  const Tooltip = styled(({ className, ...props }: any) => (
    /* eslint-disable */
    <MuiToolTip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#2753d7af",
      color: "white",
      boxShadow: "0rem 0 1rem #00000049",
      width: "6rem",
      height: "2.2rem",
      borderTopLeftRadius: "1.5rem",
      borderBottomLeftRadius: "1.5rem",
      fontWeight: "800",
      fontSize: "0.8rem",
      display: "flex",
      alignItems: "center",
      paddingLeft: "1rem",
      marginRight: "-3rem",
      position: "relative",
      right: "-1rem"
    }
  }));

  return (
    <>
      {!darkModeIsloading && (
        <header className={classes.header__section}>
          <ScrollHeader onDarkModeToggle={onDarkModeToggle} hideToggle={true} />
          <div className={classes.ham__wrapper}>
            <RotaryMenu />
          </div>
          <Box
            sx={{
              position: "fixed",
              top: "0rem",
              right: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"
            }}
            className={classes.desktop__menu}
          >
            <Box
              className={classes.side__menu}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "71vh",
                boxShadow: "0 0 0.5rem #00000049",
                backgroundColor: "#ffffff04",
                borderRadius: "5rem",
                paddingTop: "2rem",
                paddingBottom: "2rem"
              }}
            >
              <Box>
                <input
                  checked={isDarkMode}
                  className={classes.toggle}
                  type="checkbox"
                  onChange={onDarkModeToggle}
                />
              </Box>
              <Box>
                <nav>
                  <Tabs
                    orientation="vertical"
                    // value={tabValue}
                    onChange={handleTabChange as any}
                    TabIndicatorProps={{
                      style: {
                        border: `solid 0.1px ${isDarkMode ? "black" : "white"}`,
                        width: "4px"
                      }
                    }}
                  >
                    {routes.map((route) => (
                      <Tooltip
                        key={`tab-${route.name}`}
                        title={route.name}
                        placement="left"
                        TransitionComponent={Zoom}
                      >
                        <Tab
                          sx={{ minWidth: "1rem" }}
                          label={route.IconComponent}
                        />
                      </Tooltip>
                    ))}
                  </Tabs>
                </nav>
              </Box>
            </Box>
          </Box>
        </header>
      )}
    </>
  );
}
export default Header;
