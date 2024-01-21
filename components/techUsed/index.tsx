import { Box, Typography } from "@mui/material";

import { useDarkMode } from "../../hooks/useDarkMode";

export const TechUsed = ({
  techStack,
  variant,
}: {
  techStack: string[];
  variant?: string;
}) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <Typography sx={{ fontSize: "1.1rem" }} fontWeight={600}>
        Tech stack
      </Typography>
      {variant === "minimal" ? (
        <Typography>{techStack.join(", ")}</Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "0.5rem" }}>
          {techStack?.map((item) => (
            <Typography
              sx={{
                borderRadius: "0.25rem",
                margin: "0.3rem 0.25rem",
                padding: "0.1rem 0.4rem",
                fontWeight: 500,
                fontSize: "0.8rem",
                color: isDarkMode ? "white" : "#000000",
                border: isDarkMode ? "solid 1px #adadadaa" : "solid 1px grey",
              }}
              key={item}
              component={"span"}
            >
              {item}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};
