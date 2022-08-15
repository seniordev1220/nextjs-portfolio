import { BlogItem } from "../store/blogs/types";
import request from "../helpers/utils/request";

export const login = (item: {username:string, password:string}) => {
    const endpoint = "users/login";
    return request.POST({ endpoint, body: item });
};
