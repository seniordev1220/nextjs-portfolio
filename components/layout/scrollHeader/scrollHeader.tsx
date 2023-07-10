import { Box, Link } from "@mui/material";
import { useState, useContext, useEffect } from "react";

import { Logo } from "../../Logo";
import { DarKModeContext } from "../layout";
import { Maybe } from "../../../types";
import { joinClass } from "../../../helpers/utils";

import classes from "./scrollHeader.module.scss";

export const ScrollHeader = ({
  onDarkModeToggle,
  hideToggle,
}: {
  onDarkModeToggle: () => void;
  hideToggle: boolean;
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState<Maybe<number>>();
  const [visible, setVisible] = useState(true);
  const { isDarkMode } = useContext(DarKModeContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos! > currentScrollPos;
      setPrevScrollPos(currentScrollPos!);
      setVisible(isVisible);
    };

    window && window.addEventListener("scroll", handleScroll);
    return () => {
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <Box
      style={
        isDarkMode
          ? { backgroundColor: "#111" }
          : {
              backgroundImage:
                "linear-gradient(to right, #e7f6ff, #c3dfff, #b6d8ff, #a1cdff, #a1cdff)",
            }
      }
      className={visible ? classes.header_visible : classes.header_hidden}
    >
      <Box
        sx={{
          position: "fixed",
          top: "0.5rem",
          left: "0.5rem",
          height: "5rem",
        }}
      >
        <Link href="/">
          <Logo />
        </Link>
      </Box>
      <Box
        className={joinClass(
          classes.toggle__desktop,
          hideToggle ? classes.header_l1_toggle : "",
        )}
      >
        <input
          checked={isDarkMode}
          className={classes.toggle}
          type="checkbox"
          onChange={onDarkModeToggle}
        />
      </Box>
    </Box>
  );
};
