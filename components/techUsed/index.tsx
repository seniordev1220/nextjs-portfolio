import { Box, Typography } from "@mui/material";

export const TechUsed = ({
  techStack,
  variant,
}: {
  techStack: string[];
  variant?: string;
}) => {
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
      <Typography sx={{ fontSize: "1.3rem" }} fontWeight={600}>
        Tech stack
      </Typography>
      {variant === "minimal" ? (
        <Typography>{techStack.join(", ")}</Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "0.5rem" }}>
          {techStack.map((item) => (
            <Typography
              sx={{
                backgroundColor: "#353839aa",
                borderRadius: "0.5rem",
                margin: "0.1rem 0.25rem",
                padding: "0rem 0.3rem",
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "white",
                boxShadow: "0rem 0rem 0.2rem grey",
                border: "solid 1px #353839aa",
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
