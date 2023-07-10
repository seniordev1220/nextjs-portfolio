import { useContext } from "react";

import { DarKModeContext } from "../components/layout/layout";

export const useDarkMode = () => {
  const { isDarkMode, darkModeIsloading } = useContext(DarKModeContext);
  return { isDarkMode, darkModeIsloading };
};
