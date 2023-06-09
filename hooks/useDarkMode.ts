import { useContext } from "react";

import { DarKModeContext } from "../components/layout/layout";

export const useDarkMode = () => {
  const { isDarkMode } = useContext(DarKModeContext);
  return { isDarkMode };
};
