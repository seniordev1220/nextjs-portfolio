import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { blogs } from "../../mock/blogs";
interface BlogDetailsType {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    content: string;
}

const Blog = ({ title, date, image, content }: BlogDetailsType) => {
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (descriptionRef.current !== null) {
            descriptionRef.current.innerHTML = content;
        }
    }, [])
    return (
        <Box sx={{ width: "95%", maxWidth: "1024px", margin: "auto", marinTop: "2rem", marginBottom: "2rem" }}>
            <h1>{title}</h1>
            <span>{date}</span>
            <Box sx={{ marginTop: "3rem" }}>
                <div ref={descriptionRef}></div>
            </Box>
        </Box>
    )
}

export async function getStaticPaths() {

    const ids = blogs.map((item: { id: any; }) => item.id)
    const pregenpaths = ids.map((item: number) => {
        return { params: { blog: item.toString() } }
    })
    console.log(pregenpaths)
    return {
        paths: [
            { params: { blog: '1' } },
            { params: { blog: '2' } },
            { params: { blog: '3' } },
            { params: { blog: '4' } }
        ],
        fallback: true
    }
}
export async function getStaticProps(context: any) {
    const { params } = context;
    console.log(params)
    //param i s an object withg key pid
    const blogId = params.blog
    const blogData = blogs.find((item: any) => item.id === Number(blogId))
    console.log(blogData, "bb")
    if (!blogData) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            ...blogData
        }
    }
}
//For dynamic pages like this pre generate is not the default option
//so:-

export default Blog