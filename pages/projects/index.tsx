import React from 'react'
// import useSWR from 'swr'
import { Card } from '../../components/card'
import Layout from '../../components/layout/layout'
import { Grid, Box } from '@mui/material'
// import { fetcher } from '../../helpers/utils/fetcher'
import { projects } from '../../mock/projects'
import { ScrollDown } from '../../components/scrolldown'

function Projects(props: any) {
    //alternative for data fetching 
    //request of url will be sent when this component is loaded

    // const { data }: any = useSWR(`/projects?showHidden=false`, fetcher)

    return <>
        <Layout variant="l2" title="Projects">
            <Grid container spacing={1} sx={{ marginTop: '2rem' }}>
                {projects?.map((data: any) => (
                    <>
                        <Grid key={data.title} justifyContent="center" display="flex" xs={12} sm={12}
                            sx={{ marginBottom: '2rem' }}
                        >
                            <Card {...data} endpoint="projects" isListVariant />
                        </Grid>
                    </>
                ))}
            </Grid>
        </Layout>
        <ScrollDown/>
    </>
}
export default Projects

