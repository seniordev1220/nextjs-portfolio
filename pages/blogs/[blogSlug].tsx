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

    const ids = blogs.map((item: { id: number; }) => item.id)
    const pregeneratedPaths = ids.map((item: number) => {
        return { params: { blogSlug: item.toString() } }
    })
    return {
        paths: pregeneratedPaths,
        fallback: true
    }
}
export async function getStaticProps(context: { params: { blogSlug: number } }) {
console.log(context)
    const blogSlug = context.params.blogSlug
    interface blogDataType{
        id: number;
        title:string;
        date: string,
        description:string,
        image: string,
        slug: string,
        content: string
    }
    const blogData = blogs.find((item: blogDataType) => item.id === Number(blogSlug))
    if (!blogData) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            ...blogData
        },
        revalidate: 3600
    }
}

export default Blog
