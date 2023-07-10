import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import { TechUsed } from "../techUsed";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ScrollRight } from "../scrollRight";

import { CardItemProps } from "./card.type";
import classes from "./cardItem.module.scss";

export const Card = ({
  title,
  description,
  techStack,
  image,
  slug,
  endpoint,
  isListVariant,
}: CardItemProps) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push({
      pathname: `${endpoint}/${slug}`,
    });
  };
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      className={classes.card__container}
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: isListVariant ? "0 0 3px grey" : "none",
        userSelect: "none",
      }}
    >
      {isListVariant && (
        <Typography
          component="h2"
          sx={{ fontWeight: "600", fontSize: "x-large", margin: "2rem" }}
        >
          {title}
        </Typography>
      )}
      <Grid
        container
        className={classes.card}
        justifyContent="center"
        sx={{
          padding: "1rem",
          minHeight: "50vh",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          className={classes["card__image--desk"]}
          sx={{
            margin: "1rem",
          }}
        >
          <Box>
            <Image
              className={classes.card__image}
              layout="responsive"
              priority
              width={400}
              height={300}
              src={image}
              alt={title}
            />
          </Box>
          <Box className={classes.card__tech}>
            <TechUsed techStack={techStack} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="flex-start"
          sx={{
            textAlign: "left",
            margin: "1rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {!isListVariant && (
              <Typography
                component="h2"
                sx={{
                  fontWeight: "600",
                  fontSize: "large",
                  marginRight: "1rem",
                }}
              >
                {title}
              </Typography>
            )}
          </Box>
          <Typography
            className={classes.description}
            sx={{ marginTop: "1rem", textOverflow: "ellipsis" }}
          >
            {description}
          </Typography>
          <Button
            variant="outlined"
            onClick={handleRedirect}
            sx={{
              width: "fit-content",
              marginTop: "1rem",
              border: `solid 1px ${isDarkMode ? "#4e4e4e" : "#00000059"}`,
              color: isDarkMode ? "#a5a5a5" : "#00000098",
              ":hover": {
                borderColor: "#2753d7",
              },
            }}
          >
            Read More
          </Button>
          <Box
            className={classes.scrollRight}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "5rem",
            }}
          >
            <ScrollRight />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
