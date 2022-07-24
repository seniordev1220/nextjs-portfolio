import { createSlice } from '@reduxjs/toolkit'
import { BlogItem } from './types';


const intialState: { blogs: BlogItem[], blogItem: BlogItem, isLoading: boolean, error: any } = {
    blogs: [],
    blogItem: {
        id: -1,
        title: "",
        date: "",
        description: "",
        image: "",
        slug: "",
        content: ""
    },
    isLoading: false,
    error: null
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState: intialState,
    reducers: {
        getBlogs: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLoading = true
        },
        getBlogsSuccess: (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload
        },
        getBlogsFailed: (state, action) => {
          
            state.isLoading = false;
            state.error = action.payload
        },

        getBlogItem: (state, action) => {
            state.isLoading = true
        },
        getBlogItemSuccess: (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload
        },
        getBlogItemFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;

        },
        addBlog: (state, action) => {
            state.isLoading = false;
        },
        addBlogSuccess: (state, action) => {
            state.isLoading = false;
        },
        addBlogFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        editBlogItem: (state, action) => {
            state.isLoading = true
        },
        editBlogItemSuccess: (state, action) => {
            state.isLoading = false;
        },
        editBlogItemFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        deleteBlogItem: (state, action) => {
            state.isLoading = true
        },
        deleteBlogItemSuccess: (state, action) => {
            state.isLoading = false;
        },
        deleteBlogItemFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})


export const {
    getBlogs, getBlogsSuccess, getBlogsFailed, getBlogItem,
    getBlogItemSuccess, getBlogItemFailed, editBlogItem,
    editBlogItemSuccess, editBlogItemFailed, deleteBlogItem,
    deleteBlogItemSuccess, deleteBlogItemFailed, addBlog,addBlogFailed,addBlogSuccess
} = blogSlice.actions
