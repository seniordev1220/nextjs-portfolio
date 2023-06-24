import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import { TechUsed } from "../techUsed";

import { CardItemProps } from "./card.type";
import classes from "./cardItem.module.scss";

export const Card = ({
  title,
  date,
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: isListVariant ? "0 0 3px grey" : "none",
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
          <Image
            layout="responsive"
            priority
            width={400}
            height={300}
            src={image}
            alt={title}
          />
          <TechUsed techStack={techStack} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="flex-start"
          sx={{ textAlign: "left", margin: "1rem" }}
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
            <Typography sx={{ color: "#2753d7", fontWeight: "600" }}>
              {date}
            </Typography>
          </Box>
          <Box className={classes["card__image--mob"]}>
            <Box sx={{ width: "60%" }}>
              <Image
                layout="responsive"
                priority
                width={400}
                height={300}
                src={image}
                alt={title}
              />
            </Box>

            <TechUsed variant="minimal" techStack={techStack} />
          </Box>
          <Typography
            className={classes.description}
            sx={{ marginTop: "1rem", textOverflow: "ellipsis" }}
          >
            {description}
          </Typography>
          <Button
            sx={{ margin: "1rem 0rem 1rem 0rem" }}
            onClick={handleRedirect}
          >
            Read more
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
