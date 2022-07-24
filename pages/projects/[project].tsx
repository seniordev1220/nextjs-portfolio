import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { projects } from "../../mock/projects";
interface ProjectDetailsType {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    content: string;
}

const Project = ({ title, image,description, content }: ProjectDetailsType) => {
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (descriptionRef.current !== null) {
            descriptionRef.current.innerHTML = content;
        }
    }, [])
    return (
        <Box sx={{ width: "95%", maxWidth: "1024px", margin: "auto", marinTop: "2rem", marginBottom: "2rem" }}>
            <h1>{title}</h1>
           <p>{description}</p>
            <Box sx={{ marginTop: "3rem" }}>
                <div ref={descriptionRef}></div>
            </Box>
        </Box>
    )
}

export async function getStaticPaths() {

    const ids = projects.map((project: { id: number }) => project.id)
    const pregenpaths = ids.map((item: number) => {
        return { params: { project: item.toString() } }
    })
 
    return {
        paths: [
            { params: { project: '1' } },
            { params: { project: '2' } },
            { params: { project: '3' } },
            { params: { project: '4' } }
        ],
        fallback: true
    }
}
export async function getStaticProps(context: any) {
    const { params } = context;
    
    //param i s an object withg key pid
    const projectId = params.project
    const projectData = projects.find((item: any) => item.id === Number(projectId))
    
    if (!projectData) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            ...projectData
        }
    }
}
//For dynamic pages like this pre generate is not the default option
//so:-

export default Project