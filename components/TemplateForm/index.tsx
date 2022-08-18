import React, { useState } from 'react'
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import { BlogItem } from '../../store/blogs/types'
import { useDispatch } from 'react-redux'
import { editBlogItem, addBlog } from '../../store/blogs/reducer'
import { editProjectItem, addProject } from '../../store/projects/reducer'

const TemplateForm = ({ closeModal, formtitle, isFormDetailsEdit, initialFormData, isProject }:
    {
        closeModal: () => void,
        formtitle: string,
        initialFormData: BlogItem,
        isFormDetailsEdit: boolean,
        isProject: boolean
    }) => {
    const dispatch = useDispatch();
    const [templateFormData, setTemplateFormData] = useState(initialFormData);
    const handleChange = (value: string | boolean, key: string) => {
        setTemplateFormData(prev => ({ ...prev, [key]: value }))
    }
    const handleSave = () => {
        if (isProject) {
            isFormDetailsEdit ?
                (dispatch(editProjectItem({ data: templateFormData, closeModal: closeModal }))) :
                (dispatch(addProject({ data: templateFormData, closeModal: closeModal })))
        }
        else{
            isFormDetailsEdit ?
                (dispatch(editBlogItem({ data: templateFormData, closeModal: closeModal }))) :
                (dispatch(addBlog({ data: templateFormData, closeModal: closeModal })))
        }
    }
    return (
        <Box sx={{
            width: "100%", height: "100vh", maxWidth: "800px", display: "flex",
            flexDirection: "column", backgroundColor: "white"
        }}>
            <Typography sx={{ margin: "1rem", fontSize: "2rem", fontWeight: "600" }}
            >{isFormDetailsEdit ? `Edit ${formtitle}` : `Create ${formtitle}`}</Typography>
            <TextField value={templateFormData.title} onChange={(e) => handleChange(e.target.value, "title")} sx={{ margin: "1rem" }} label="Title" variant="outlined" />
            <TextField value={templateFormData.date} onChange={(e) => handleChange(e.target.value, "date")} sx={{ margin: "1rem" }} label="Date" variant="outlined" />
            <TextField value={templateFormData.description} onChange={(e) => handleChange(e.target.value, "description")} sx={{ margin: "1rem" }} multiline label="Description" variant="outlined" />
            <TextField value={templateFormData.image} onChange={(e) => handleChange(e.target.value, "image")} sx={{ margin: "1rem" }} label="Image" variant="outlined" />
            <TextField value={templateFormData.slug} onChange={(e) => handleChange(e.target.value, "slug")} sx={{ margin: "1rem" }} label="Slug" variant="outlined" />
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography sx={{ marginLeft: "1rem", color: "black" }}>Show in portfolio</Typography>
                <Checkbox value={templateFormData.showinportfolio}
                    onChange={(e) => {

                        handleChange(e.target.value === "true" ? true : false, "showinportfolio")
                    }} />
            </Box>
            <Button onClick={handleSave} sx={{ margin: "1rem" }} variant="contained">{isFormDetailsEdit ? "Edit" : "Add"}</Button>
            <Button onClick={closeModal} sx={{ margin: "1rem", color: "red", borderColor: "red" }} variant="outlined">Cancel</Button>
        </Box>
    )
}
export default TemplateForm
