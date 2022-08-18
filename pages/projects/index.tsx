import React from 'react'
import useSWR from 'swr'
import { Card } from '../../components/card'
import Layout from '../../components/layout/layout'
import { Grid } from '@mui/material'
import { fetcher } from '../../helpers/utils/fetcher'

function Projects(props: any) {
    //alternative for data fetching 
    //request of url will be sent when this component is loaded

    const { data }: any = useSWR(`/projects?showHidden=false`, fetcher)
    const projects = data?.data?.projects;
    if (!data) {
        return <p>Failed to load</p>
    }
    if (!data) {
        return <p>loading...</p>
    }
    return <>
        <Layout variant="l2" title="Projects">
            <Grid container spacing={1}>
                {projects?.map((data: any) => (
                    <Grid key={data.title} justifyContent="center" display="flex" xs={12} sm={3}>
                        <Card {...data} endpoint="projects" />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    </>
}
export default Projects

