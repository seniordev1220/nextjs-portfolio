import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Layout from "../../components/layout/layout";
import { getProjectsApi } from "../../services/projects";
interface ProjectDetailsType {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    content: string;
}

const Project = ({ title, date, image, content }: ProjectDetailsType) => {
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (descriptionRef.current !== null) {
            descriptionRef.current.innerHTML = content;
        }
    }, [content])
    return (
        <Layout variant="l3" title="Projects">
            <Box sx={{ width: "95%", maxWidth: "1024px", margin: "auto", marinTop: "2rem", marginBottom: "2rem" }}>
                <h1>{title}</h1>
                <span>{date}</span>
                <Box sx={{ marginTop: "3rem" , lineHeight:"1.5"}}>
                    <div ref={descriptionRef}></div>
                </Box>
            </Box>
        </Layout>
    )
}
const getProjects = async () => {
    const response: any = await getProjectsApi(false, 999, 0)
    return await response.data.projects
}

export async function getStaticPaths() {

    const projects: any = await getProjects();
    const slugs = projects.map((item: { slug: string; }) => item.slug)
    const pregeneratedPaths = slugs.map((item: string) => {
        return { params: { projectSlug: item.toString() } }
    })
    return {
        paths: pregeneratedPaths,
        fallback: true
    }
}
export async function getStaticProps(context: { params: { projectSlug: string } }) {

    const projectSlug = context.params.projectSlug
    interface projectDataType {
        id: number;
        title: string;
        date: string,
        description: string,
        image: string,
        slug: string,
        content: string
    }
    const projectData = await getProjects();
    const project = projectData.find((item: projectDataType) => item.slug === projectSlug);

    if (!project) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            ...project
        },
        revalidate: 10
    }
}

export default Project
