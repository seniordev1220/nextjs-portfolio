import { ProjectItem } from "../store/projects/types";
import request from "../helpers/utils/request";
import { getToken } from "../hooks/useToken";

export const getProjectsApi = (showHidden: boolean, limit: number, offset: number) => {
    const endpoint = "projects";
    // return {
    //     data:{
    //         projects:projects
    //     }
    // }
    return request.GET({ endpoint, params: { showHidden: showHidden, limit, offset } });
};

export const getProjectItemApi = (id: number) => {

    const endpoint = `projects/${id}`;
    return request.GET({ endpoint });
};

export const addProjectApi = (item: ProjectItem) => {
    const endpoint = "projects";
    const token = getToken()
    const response = request.POST({ endpoint, body: item, headers: { 'Authorization': 'Bearer ' + token } });
    return response
};

export const updateProjectApi = (item: ProjectItem) => {
    const token = getToken()
    const endpoint = `projects/${item.id}`;
    return request.PUT({ endpoint, body: item, headers: { 'Authorization': 'Bearer ' + token } });
};

export const deleteProjectApi = (id: number) => {
    const token = getToken()
    const endpoint = `projects/${id}`;
    return request.DELETE({ endpoint, headers: { 'Authorization': 'Bearer ' + token } });
};
