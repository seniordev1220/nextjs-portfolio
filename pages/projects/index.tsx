import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import useSWR from 'swr'
import { Grid, Box, Typography, Button } from "@mui/material";

import Layout from "../../components/layout/layout";
// import { fetcher } from '../../helpers/utils/fetcher'
import { projects } from "../../mock/projects";
import { ScrollDown } from "../../components/scrolldown";
import { TechUsed } from "../../components/techUsed";

function Projects() {
  //alternative for data fetching
  //request of url will be sent when this component is loaded
  // const { data }: any = useSWR(`/projects?showHidden=false`, fetcher)
  const router = useRouter();
  const handleRedirect = (slug: string) => {
    router.push({
      pathname: `projects/${slug}`,
    });
  };
  return (
    <>
      <Layout variant="l2" title="Projects">
        <Grid container sx={{ marginTop: "2rem" }}>
          {projects?.map((data: any) => (
            <>
              <Box
                sx={{
                  boxShadow: "0 0 0.4rem #8181811c",
                  border: "solid 1px rgba(126, 126, 126, 0.091)",
                  marginBottom: "2rem",
                  padding: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: "600",
                      fontSize: "x-large",
                      margin: "2rem 0rem",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography sx={{ color: "#2753d7", fontWeight: "600" }}>
                    {data.date}
                  </Typography>
                </Box>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xs={12} md={2}>
                    <Box sx={{ margin: "auto", width: "fit-content" }}>
                      <Image
                        loading="eager"
                        priority
                        width={200}
                        height={150}
                        src={data.image}
                        alt={data.title}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={12} item md={10} sx={{ padding: "0rem 1rem" }}>
                    <TechUsed techStack={data.techStack} />
                    <Typography sx={{ marginTop: "1rem" }}>
                      {data.description}
                    </Typography>
                    <Button
                      sx={{ marginTop: "1rem" }}
                      onClick={() => handleRedirect(data.slug)}
                    >
                      Read more
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </>
          ))}
        </Grid>
      </Layout>
      <ScrollDown />
    </>
  );
}
export default Projects;
