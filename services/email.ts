import request from "../helpers/utils/request";
import { getToken } from "../hooks/useToken";
import { emailDataItem } from "../store/email/types";

export const getEmailsApi = (limit: number, offset: number) => {
    const endpoint = "email";
    const token = getToken()
    return request.GET({ endpoint, params: { limit, offset }, headers: { 'Authorization': 'Bearer ' + token }  });
};

export const sendEmailApi = (item: emailDataItem) => {
    const endpoint = "email";
    const response = request.POST({ endpoint, body: item });
    return response
};

