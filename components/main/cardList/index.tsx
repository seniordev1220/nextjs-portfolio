import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import { useDarkMode } from "../../../hooks/useDarkMode";
import { Card } from "../../card";
import { Background } from "../../background";
import more from "../../../assets/images/5.png";

import classes from "./blogs.module.scss";

const viewMore = ` Embark on my career journey with me and discover what's next! Check out what's currently in the works and beyond by clicking below.`;

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  content: string;
  techStack: string;
}

interface CardListProps {
  type: string;
  description: string;
  title: string;
  data: Blog[];
  sectionMapping: number;
}

export const CardList = ({ type, description, title, data }: CardListProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Box
      className={classes.blogs__container}
      sx={{
        /* eslint-disable */
        ...(isDarkMode && {
          border: "solid 1px #2f2f2fc4",
          boxShadow: "0 0 1rem #00000078",
        }),
      }}
    >
      <Background />
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: isDarkMode ? "#696969" : "#353839aa",
            fontWeight: 800,
          }}
        >
          <Parallax
            easing="easeInOut"
            opacity={[0.3, 1]}
            translateX={["-50%", "0%"]}
          >
            <p>{description}</p>
          </Parallax>
        </Box>
        <Box component="span" sx={{ margin: "auto" }}>
          <Parallax
            easing="easeInOut"
            opacity={[0.5, 1]}
            translateX={["20%", "0%"]}
          >
            <Typography
              className={classes.blogs__title}
              sx={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem" }}
            >
              {title}
            </Typography>
          </Parallax>
        </Box>
      </Box>
      <Box sx={{ width: "90%" }}>
        <Carousel
          className={classes.carousel}
          verticalSwipe="standard"
          useKeyboardArrows
          showArrows
          emulateTouch
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          axis="horizontal"
          centerMode
          centerSlidePercentage={100}
        >
          {
            data?.map((blog, index) => (
              <Box key={`title:${blog.title}-${index}`}>
                <Card {...blog} endpoint={type} />
              </Box>
            )) as any
          }
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: "350px",
                maxWidth: "100%",
              }}
            >
              <Image
                // layout="fill"
                priority
                width={320}
                height={300}
                src={more}
                alt={"view More"}
              />
            </Box>
            <Box sx={{ width: "350px", maxWidth: "100%" }}>
              <Typography sx={{ margin: "1rem", textAlign: "left" }}>
                {viewMore}
              </Typography>
              <Button variant="contained">
                <Link href="/projects">View More</Link>
              </Button>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};
