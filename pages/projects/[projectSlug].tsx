import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Image from "next/image";

import Layout from "../../components/layout/layout";
import { getProjectsApi } from "../../services/projects";
import { TechUsed } from "../../components/techUsed";
import withScrollToPosition from "../../hoc/scrollManager";

interface ProjectDetailsType {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
  techStack: string[];
  visitWebsite?: string;
}

const Project = ({
  title,
  date,
  image,
  content,
  description,
  techStack,
  visitWebsite,
}: ProjectDetailsType) => {
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (descriptionRef.current !== null && contentRef.current !== null) {
      descriptionRef.current.innerHTML = description;
      contentRef.current.innerHTML = content;
    }
  }, [content, description]);
  const handleRedirectToWebSite = (redirectTo: string) => {
    if (window) {
      window.open(redirectTo, "_blank");
    }
  };
  return (
    <Layout variant="l3" title="Projects">
      <Box
        sx={{
          width: "1200px",
          maxWidth: "100%",
          margin: "auto",
          marinTop: "2rem",
          marginBottom: "2rem",
          boxShadow: "0 0 0.4rem #8181811c",
          border: "solid 1px rgba(126, 126, 126, 0.091)",
          padding: "3rem 1.5rem",
          lineHeight: "1.5",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "x-large",
            marginBottom: "2.5rem",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <span>{date}</span>
        <Grid container sx={{ display: "flex" }}>
          <Grid xs={12} md={3} item={true}>
            <Box sx={{ borderRadius: "1rem", overflow: "hidden" }}>
              <Image
                src={image}
                alt={title}
                width={200}
                height={150}
                layout="responsive"
                loading="eager"
                priority
              />
            </Box>
          </Grid>
          <Grid xs={12} md={9} item sx={{ padding: "1rem", lineHeight: "1.5" }}>
            <Typography
              sx={{ marginBottom: "1rem" }}
              fontWeight={600}
              fontSize="large"
            >
              Introduction
            </Typography>
            <div ref={descriptionRef}></div>
            {visitWebsite && (
              <Button
                variant="outlined"
                onClick={() => handleRedirectToWebSite(visitWebsite)}
                sx={{
                  width: "300px",
                  margin: "2rem auto 0rem auto",
                  fontWeight: "600",
                  border: `solid 1px`,
                  borderColor: "#767676",
                  ":hover": {
                    borderColor: "#2753d7",
                  },
                }}
              >
                See Live Demo
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={10}>
            <TechUsed techStack={techStack} />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "2rem", lineHeight: 1.8 }}>
          <div ref={contentRef}></div>
        </Box>
      </Box>
    </Layout>
  );
};
const getProjects = async () => {
  const response: any = await getProjectsApi();
  return await response.data.projects;
};

export async function getStaticPaths() {
  const projects: any = await getProjects();
  const slugs = projects.map((item: { slug: string }) => item.slug);
  const pregeneratedPaths = slugs.map((item: string) => {
    return { params: { projectSlug: item.toString() } };
  });
  return {
    paths: pregeneratedPaths,
    fallback: true,
  };
}
export async function getStaticProps(context: {
  params: { projectSlug: string };
}) {
  const projectSlug = context.params.projectSlug;
  interface projectDataType {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
    slug: string;
    content: string;
    techStack: string[];
  }
  const projectData = await getProjects();
  const project = projectData.find(
    (item: projectDataType) => item.slug === projectSlug,
  );

  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ...project,
    },
    revalidate: 10,
  };
}

export default withScrollToPosition(Project);
