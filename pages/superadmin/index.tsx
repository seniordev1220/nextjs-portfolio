import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { Box, Button, Modal, Paper, Switch, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from '@mui/material'
import Router from 'next/router'
import TemplateForm from '../../components/TemplateForm';
import { useDispatch, useSelector } from 'react-redux';
import { blogStateType, deleteBlogItem, editBlogItem, getBlogs } from '../../store/blogs/reducer';
import { RootState } from '../../store/types';
import { BlogItem } from '../../store/blogs/types';

const Dashboard = (props: any) => {
    const [selectedTab, setSelectedTab] = useState<"blog" | "project">("blog");
    const [formModalOpen, setFormModalOpen] = useState(false);
    const [editId, setEditId] = useState(-1);
    const dispatch = useDispatch();
    const { blogs } = useSelector<RootState>(state => state.blog) as blogStateType;
    // const { projects } = useSelector<RootState>(state => state.project) as projectStateType;

    // const tableData: { blog: BlogItem[] } = { blog: blogs }
    const [tableData, setTableData] = useState<{ blog: BlogItem[], project: BlogItem[] }>({ blog: [], project: [] })
    useEffect(() => {
        dispatch(getBlogs({showHidden:true, limit:999, offset:0}))
    }, [])

    const handleChange = (e: React.SyntheticEvent<Element, Event>, value: "blog" | "project") => {
        setSelectedTab(value)
    }
    const handleFormModalClose = () => {
        setFormModalOpen(false)
    }
    const handleShowChange = (id:number) => {
        dispatch(editBlogItem({ data: {...tableData.blog.find((item: { id: number }) => item.id === id),
        showinportfolio:!tableData.blog.find((item: { id: number }) => item.id === id)?.showinportfolio } }))
    }
    const handleDelete=(id:number)=>{
        if(selectedTab==="blog"){
            dispatch(deleteBlogItem(id))
        }

    }
    useEffect(() => {
        setTableData(prev => ({ ...prev, blog: blogs }))

    }, [blogs])

    const tableHeadings = [{ label: "Title", width: "20%" }, { label: "Date", width: "10%" },
    { label: "Description", width: "40%" }, { label: "Image", width: "5%" }, { label: "slug", width: "5%" }]
    return (
        <>
            <Box sx={{ backgroundColor: "white", height: "100vh" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "1rem", marginRight: "1rem" }}>
                    <Tabs value={selectedTab} onChange={handleChange}>
                        <Tab label="Blog" value="blog" />
                        <Tab label="Project" value="project" />
                    </Tabs>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button variant="contained"
                            onClick={() => {
                                setFormModalOpen(true)
                                setEditId(-1)
                            }}
                        >Add</Button>
                    </Box>

                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width="10%">SL No</TableCell>
                                {tableHeadings.map((heading, index) => (
                                    <TableCell key={heading.label + index} width={heading.width} sx={{ width: `${heading.width}` }}>{heading.label}</TableCell>
                                ))}
                                <TableCell width="10%">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData[selectedTab]?.map((row: BlogItem, index: number) => (
                                <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">  {index + 1} </TableCell>
                                    <TableCell >{row.title}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell > <Typography >{row.description}</Typography></TableCell>
                                    <TableCell>  <img style={{ maxWidth: "5rem" }} src={row.image} alt={row.title} /> </TableCell>
                                    <TableCell >{row.slug}</TableCell>
                                    <TableCell>
                                        <Switch checked={row.showinportfolio} onChange={()=>handleShowChange(row.id)} />
                                        <Button onClick={() => {
                                            Router.push(`superadmin/${selectedTab}?id=${row.id}`)
                                        }}><PreviewIcon /></Button>
                                        <Button onClick={() => {
                                            setEditId(row.id)
                                            setFormModalOpen(true)
                                        }}><EditIcon /></Button>
                                        <Button onClick={()=>handleDelete(row.id)}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
           
            <Modal sx={{ display: "flex", justifyContent: "center" }} onBackdropClick={handleFormModalClose} open={formModalOpen}
                onClose={handleFormModalClose}>
                <TemplateForm  closeModal={handleFormModalClose}
                    formtitle={selectedTab}
                    isFormDetailsEdit={editId !== -1}
                    initialFormData={
                        (tableData.blog.find((item: { id: number }) => item.id === editId)) ||
                        {
                            id: -1,
                            title: "",
                            description: "",
                            date: "",
                            image: "",
                            slug: "",
                            content: "",
                            showinportfolio: false

                        } as BlogItem}
                />
            </Modal>
        </>
    )
}
export default Dashboard;
