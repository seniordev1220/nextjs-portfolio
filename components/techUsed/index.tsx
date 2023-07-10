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
                backgroundColor: isDarkMode ? "#353839aa" : "#a1c0e726",
                borderRadius: "0.5rem",
                margin: "0.3rem 0.25rem",
                padding: "0rem 0.3rem",
                fontWeight: 500,
                fontSize: "0.8rem",
                color: isDarkMode ? "white" : "#4d4d4d",
                boxShadow: isDarkMode
                  ? "0rem 0rem 0.2rem grey"
                  : "0rem 0rem 0.2rem #8080804f",
                border: isDarkMode
                  ? "solid 1px #353839aa"
                  : "solid 1px #3538393b",
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
