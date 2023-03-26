import { createSlice } from '@reduxjs/toolkit'
import { ProjectItem } from './types';
export interface projectStateType {
    projects: ProjectItem[],
    projectItem: ProjectItem,
    isProjectLoading: boolean,
    error: any,
    
}

const intialState: projectStateType = {
    projects: [],
    projectItem: {
        id: -1,
        title: "",
        date: "",
        description: "",
        image: "",
        slug: "",
        content: "",
        showinportfolio: true,
        techStack:""
    },
    isProjectLoading: true,
    error: null
}

export const projectSlice:any = createSlice({
    name: 'project',
    initialState: intialState,
    reducers: {
        getProjects: (state, action) => {
            
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isProjectLoading = true
        },
        getProjectsSuccess: (state, action) => {
            state.isProjectLoading = false;
            state.projects = action.payload
        },
        getProjectsFailed: (state, action) => {

            state.isProjectLoading = false;
            state.error = action.payload
        },

        getProjectItem: (state, action) => {
            state.isProjectLoading = true
        },
        getProjectItemSuccess: (state, action) => {
            state.isProjectLoading = false;
            state.projectItem = action.payload
        },
        getProjectItemFailed: (state, action) => {
            state.isProjectLoading = false;
            state.error = action.payload;

        },
        addProject: (state, action) => {
            state.isProjectLoading = false;
        },
        addProjectSuccess: (state, action) => {
            state.isProjectLoading = false;
        },
        addProjectFailed: (state, action) => {
            state.isProjectLoading = false;
            state.error = action.payload;
        },
        editProjectItem: (state, action) => {
            state.isProjectLoading = true
        },
        editProjectItemSuccess: (state, action) => {
            state.isProjectLoading = false;
        },
        editProjectItemFailed: (state, action) => {
            state.isProjectLoading = false;
            state.error = action.payload;
        },
        deleteProjectItem: (state, action) => {
            state.isProjectLoading = true
        },
        deleteProjectItemSuccess: (state, action) => {
            state.isProjectLoading = false;
        },
        deleteProjectItemFailed: (state, action) => {
            state.isProjectLoading = false;
            state.error = action.payload;
        }
    }
})


export const {
    getProjects, getProjectsSuccess, getProjectsFailed, getProjectItem,
    getProjectItemSuccess, getProjectItemFailed, editProjectItem,
    editProjectItemSuccess, editProjectItemFailed, deleteProjectItem,
    deleteProjectItemSuccess, deleteProjectItemFailed, addProject, addProjectFailed, addProjectSuccess
} = projectSlice.actions
