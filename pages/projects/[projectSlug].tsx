import { Box, Grid, Typography } from "@mui/material";
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
  techStack: string;
}

const Project = ({
  title,
  date,
  image,
  content,
  description,
  techStack,
}: ProjectDetailsType) => {
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (descriptionRef.current !== null && contentRef.current !== null) {
      descriptionRef.current.innerHTML = description;
      contentRef.current.innerHTML = content;
    }
  }, [content, description]);
  return (
    <Layout variant="l3" title="Projects">
      <Box
        sx={{
          width: "1200px",
          maxWidth: "95%",
          margin: "auto",
          marinTop: "2rem",
          marginBottom: "2rem",
          boxShadow: "0 0 2px grey",
          padding: "2rem",
          lineHeight: "1.5",
        }}
      >
        <h1>{title}</h1>
        <span>{date}</span>
        <Grid container sx={{ display: "flex" }}>
          <Grid xs={12} md={5} item sx={{ width: "400px", maxWidth: "50%" }}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              layout="responsive"
              loading="eager"
              priority
            />
            <TechUsed techStack={techStack} />
          </Grid>
          <Grid xs={12} md={7} item sx={{ padding: "1rem", lineHeight: "1.5" }}>
            <Typography
              sx={{ marginBottom: "1rem" }}
              fontWeight={600}
              fontSize="large"
            >
              Introduction
            </Typography>
            <div ref={descriptionRef}></div>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "2rem" }}>
          <Typography
            sx={{ marginBottom: "1rem" }}
            fontWeight={600}
            fontSize="large"
          >
            Let me show you something more exciting!
          </Typography>
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
  }
  const projectData = await getProjects();
  const project = projectData.find(
    (item: projectDataType) => item.slug === projectSlug
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
