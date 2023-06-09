import { useDarkMode } from "../../hooks/useDarkMode";

import classes from "./styles.module.scss";
export const Background = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={classes.area}>
      <ul className={classes.circles}>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
        <li className={isDarkMode ? classes.dark : classes.light}></li>
      </ul>
    </div>
  );
};
