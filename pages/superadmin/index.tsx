import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import {
  Box,
  Button,
  Modal,
  Paper,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";

import TemplateForm from "../../components/TemplateForm";
import {
  blogStateType,
  deleteBlogItem,
  editBlogItem,
  getBlogs,
} from "../../store/blogs/reducer";
import { RootState } from "../../store/types";
import { BlogItem } from "../../store/blogs/types";
import { ProjectItem } from "../../store/projects/types";
import { emailDataItem } from "../../store/email/types";
import { Emails } from "../../components/emails";
import {
  deleteProjectItem,
  editProjectItem,
  getProjects,
  projectStateType,
} from "../../store/projects/reducer";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<"blog" | "project" | "emails">(
    "blog"
  );
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [editId, setEditId] = useState(-1);
  const dispatch = useDispatch();
  const { blogs } = useSelector<RootState>(
    (state) => state.blog
  ) as blogStateType;
  const { projects } = useSelector<RootState>(
    (state) => state.project
  ) as projectStateType;

  // const { projects } = useSelector<RootState>(state => state.project) as projectStateType;

  // const tableData: { blog: BlogItem[] } = { blog: blogs }
  const [tableData, setTableData] = useState<{
    blog: BlogItem[];
    project: ProjectItem[];
    emails: emailDataItem[];
  }>({ blog: [], project: [], emails: [] });
  useEffect(() => {
    dispatch(getBlogs({ showHidden: true, limit: 999, offset: 0 }));
    dispatch(getProjects({ showHidden: true, limit: 999, offset: 0 }));
  }, []);

  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: "blog" | "project" | "emails"
  ) => {
    setSelectedTab(value);
  };
  const handleFormModalClose = () => {
    setFormModalOpen(false);
  };
  const handleShowChange = (id: number) => {
    if (selectedTab === "blog") {
      dispatch(
        editBlogItem({
          data: {
            ...tableData.blog.find((item: { id: number }) => item.id === id),
            showinportfolio: !tableData.blog.find(
              (item: { id: number }) => item.id === id
            )?.showinportfolio,
          },
        })
      );
    } else if (selectedTab === "project") {
      dispatch(
        editProjectItem({
          data: {
            ...tableData.project.find((item: { id: number }) => item.id === id),
            showinportfolio: !tableData.project.find(
              (item: { id: number }) => item.id === id
            )?.showinportfolio,
          },
        })
      );
    }
  };
  const handleDelete = (id: number) => {
    if (selectedTab === "blog") {
      dispatch(deleteBlogItem(id));
    } else if (selectedTab === "project") {
      dispatch(deleteProjectItem(id));
    }
  };
  useEffect(() => {
    setTableData((prev) => ({ ...prev, blog: blogs }));
    setTableData((prev) => ({ ...prev, project: projects }));
  }, [blogs, projects]);

  const tableHeadings = [
    { label: "Title", width: "20%" },
    { label: "Date", width: "10%" },
    { label: "Description", width: "40%" },
    { label: "Image", width: "5%" },
    { label: "slug", width: "5%" },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "white", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Blog" value="blog" />
            <Tab label="Project" value="project" />
            <Tab label="Emails" value="emails" />
          </Tabs>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              onClick={() => {
                setFormModalOpen(true);
                setEditId(-1);
              }}
            >
              Add
            </Button>
          </Box>
        </Box>
        {selectedTab === "blog" && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width="10%">SL No</TableCell>
                  {tableHeadings.map((heading, index) => (
                    <TableCell
                      key={heading.label + index}
                      width={heading.width}
                      sx={{ width: `${heading.width}` }}
                    >
                      {heading.label}
                    </TableCell>
                  ))}
                  <TableCell width="10%">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogs?.map((row: BlogItem, index: number) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {" "}
                      {index + 1}{" "}
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{row.description}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <img
                        style={{ maxWidth: "5rem" }}
                        src={row.image}
                        alt={row.title}
                      />{" "}
                    </TableCell>
                    <TableCell>{row.slug}</TableCell>
                    <TableCell>
                      <Switch
                        checked={row.showinportfolio}
                        onChange={() => handleShowChange(row.id)}
                      />
                      <Button
                        onClick={() => {
                          Router.push(`superadmin/${selectedTab}?id=${row.id}`);
                        }}
                      >
                        <PreviewIcon />
                      </Button>
                      <Button
                        onClick={() => {
                          setEditId(row.id);
                          setFormModalOpen(true);
                        }}
                      >
                        <EditIcon />
                      </Button>
                      <Button onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {selectedTab === "project" && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell width="10%">SL No</TableCell>
                  {tableHeadings.map((heading, index) => (
                    <TableCell
                      key={heading.label + index}
                      width={heading.width}
                      sx={{ width: `${heading.width}` }}
                    >
                      {heading.label}
                    </TableCell>
                  ))}
                  <TableCell width="10%">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects?.map((row: ProjectItem, index: number) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {" "}
                      {index + 1}{" "}
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      {" "}
                      <Typography>{row.description}</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <img
                        style={{ maxWidth: "5rem" }}
                        src={row.image}
                        alt={row.title}
                      />{" "}
                    </TableCell>
                    <TableCell>{row.slug}</TableCell>
                    <TableCell>
                      <Switch
                        checked={row.showinportfolio}
                        onChange={() => handleShowChange(row.id)}
                      />
                      <Button
                        onClick={() => {
                          Router.push(`superadmin/${selectedTab}?id=${row.id}`);
                        }}
                      >
                        <PreviewIcon />
                      </Button>
                      <Button
                        onClick={() => {
                          setEditId(row.id);
                          setFormModalOpen(true);
                        }}
                      >
                        <EditIcon />
                      </Button>
                      <Button onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {selectedTab === "emails" && <Emails />}
      </Box>
      <Modal
        sx={{ display: "flex", justifyContent: "center" }}
        onBackdropClick={handleFormModalClose}
        open={formModalOpen}
        onClose={handleFormModalClose}
      >
        <TemplateForm
          closeModal={handleFormModalClose}
          formtitle={selectedTab}
          isFormDetailsEdit={editId !== -1}
          isProject={selectedTab === "project"}
          initialFormData={
            (selectedTab === "blog" &&
              tableData.blog.find(
                (item: { id: number }) => item.id === editId
              )) ||
            (selectedTab === "project" &&
              tableData.project.find(
                (item: { id: number }) => item.id === editId
              )) ||
            ({
              id: -1,
              title: "",
              description: "",
              date: "",
              image: "",
              slug: "",
              content: "",
              showinportfolio: false,
            } as BlogItem | ProjectItem)
          }
        />
      </Modal>
    </>
  );
};
export default Dashboard;
