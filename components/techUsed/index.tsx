import { Box, Typography } from "@mui/material";

export const TechUsed = ({ techStack }: { techStack: string }) => {
  return (
    <Box
      sx={{
        margin: "1rem",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <Typography fontWeight={600}>Tech stack</Typography>
      <Typography>{techStack}</Typography>
    </Box>
  );
};
