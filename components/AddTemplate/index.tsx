import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { Logo } from "../Logo";
import { Editor } from "../Editor";
import { editBlogItem } from "../../store/blogs/reducer";
import { BlogItem } from "../../store/blogs/types";
import { ProjectItem } from "../../store/projects/types";
import { editProjectItem } from "../../store/projects/reducer";

import classes from "./styles.module.scss";

//log and project fields are handle the same way here
const CreateTemplate = ({
  title,
  blogItem,
  isProject,
}: {
  title: string;
  blogItem: BlogItem | ProjectItem;
  isProject: boolean;
}) => {
  const dispatch = useDispatch();
  const params: any = useRouter();
  const redirectToBlogsList = () => {
    params.push({
      pathname: `/superadmin`,
    });
  };
  const [blogFormData, setBlogFormData] = useState<BlogItem | ProjectItem>(
    blogItem
  );
  useEffect(() => {
    setBlogFormData(blogItem);
  }, [blogItem]);

  const handleChange = (value: string) => {
    setBlogFormData((prev) => ({
      ...prev,
      content: value,
      id: params.query.id,
    }));
  };
  const handleSave = () => {
    isProject
      ? dispatch(
          editProjectItem({
            data: blogFormData,
            closeModal: redirectToBlogsList,
          })
        )
      : dispatch(
          editBlogItem({ data: blogFormData, closeModal: redirectToBlogsList })
        );
  };

  return (
    <Box sx={{ backgroundColor: "white", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />
          <Typography
            className={classes.blog__title}
            sx={{
              fontSize: "2rem",
              margin: "1rem",
              color: "black",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{ marginTop: "auto", marginBottom: "auto", marginRight: "1rem" }}
        >
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </Box>
      </Box>
      <Box sx={{ margin: "1rem" }}>
        <Editor handleChange={handleChange} value={blogFormData.content} />
      </Box>
    </Box>
  );
};
export default CreateTemplate;
