import React from 'react'
import { server } from "../../helpers/utils/request"
import useSWR from 'swr'
import { Card } from '../../components/card'
import Layout from '../../components/layout/layout'
import { Box, Grid } from '@mui/material'
import { fetcher } from '../../helpers/utils/fetcher'

function Blogs(props: any) {
    //alternative for data fetching 
    //request of url will be sent when this component is loaded
    
    const { data }: any = useSWR(`/blogs`, fetcher)
    const blogs = data?.data?.blogs;
    if (!data) {
        return <p>Failed to load</p>
    }
    if (!data) {
        return <p>loading...</p>
    }
    return <>
        <Layout variant="sub" title="Blogs">
            <Grid container spacing={1}>
                {blogs?.map((data: any) => (
                    <Grid key={data.title} justifyContent="center" display="flex" xs={12} sm={3}>
                        <Card {...data} />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    </>
}
export default Blogs

