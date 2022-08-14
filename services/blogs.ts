import { BlogItem } from "../store/blogs/types";
import request from "../helpers/utils/request";

export const getBlogsApi = (showHidden:boolean, limit:number, offset:number) => {
    const endpoint = "blogs";
    return request.GET({ endpoint, params: { showHidden: showHidden, limit, offset } });
};

export const getBlogItemApi = (id: number) => {

    const endpoint = `blogs/${id}`;
    return request.GET({ endpoint });
};

export const addBlogApi = (item: BlogItem) => {
    const endpoint = "blogs";
    return request.POST({ endpoint, body: item });
};

export const updateBlogApi = (item: BlogItem) => {
    const endpoint = `blogs/${item.id}`;
    return request.PUT({ endpoint, body: item });
};

export const deleteBlogApi = (id: number) => {
    const endpoint = `blogs/${id}`;
    return request.DELETE({ endpoint });
};
