import { BlogItem } from "../store/blogs/types";
import request from "../helpers/utils/request";
import { getToken } from "../hooks/useToken";
import { blogs } from "../mock/projects";

export const getBlogsApi = (showHidden: boolean, limit: number, offset: number) => {
    const endpoint = "blogs";
    return {
        data: {
            blogs: blogs
        }
    }
    // return request.GET({ endpoint, params: { showHidden: showHidden, limit, offset } });
};

export const getBlogItemApi = (id: number) => {

    const endpoint = `blogs/${id}`;
    return request.GET({ endpoint });
};

export const addBlogApi = (item: BlogItem) => {
    const endpoint = "blogs";
    const token = getToken()
    const response = request.POST({ endpoint, body: item, headers: { 'Authorization': 'Bearer ' + token } });
    return response
};

export const updateBlogApi = (item: BlogItem) => {
    const token = getToken()
    const endpoint = `blogs/${item.id}`;
    return request.PUT({ endpoint, body: item, headers: { 'Authorization': 'Bearer ' + token } });
};

export const deleteBlogApi = (id: number) => {
    const token = getToken()
    const endpoint = `blogs/${id}`;
    return request.DELETE({ endpoint, headers: { 'Authorization': 'Bearer ' + token } });
};
