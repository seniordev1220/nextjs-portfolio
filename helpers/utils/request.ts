const server = process.env.SERVER;

type ReqOptions = {
    endpoint: string;
    body?: any;
    params?: any;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
};

type ReqMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";


export function getUrlWithQueryParams(
    base: string,
    queryData: any = {}
): string {
    const queries = Object.keys(queryData);

    return queries.reduce(
        (acc: string, query: string, index: number): string => {
            const url = `${acc}${encodeURIComponent(
                query
            )}=${encodeURIComponent(queryData[query])}`;

            return index + 1 < queries.length ? `${url}&` : url;
        },
        `${base}?`
    );
}

export function getReqUrl({ params, endpoint }: ReqOptions): string {
    const base = server;
    const url = `${base}/${endpoint}`;

    return params ? getUrlWithQueryParams(url, params) : url;
}

export function getReqOptions(
    method: ReqMethods,
    { headers, body }: ReqOptions
): RequestInit {
    const reqHeaders:any = {
        Accept: "application/json",
        "Access-Control-Allow-Private-Network": true,
        ...headers
    };

    const requestOptions: RequestInit = {
        method,
        mode: "cors"
    };
    if (
        method === "POST" ||
        method === "PUT" ||
        method === "PATCH" ||
        method === "DELETE"
    ) {
        reqHeaders["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
    }
    requestOptions.headers = reqHeaders;

    return requestOptions;
}

function parseJSON(response: Response): any {
    if (response.status === 204 || response.status === 205) {
        return response;
    }
    return response.json();
}

function request(
    method: ReqMethods,
    reqOptions: ReqOptions
): Promise<Response> {
    const url = getReqUrl(reqOptions);
    const options = getReqOptions(method, reqOptions);
    // options.credentials = reqOptions.credentials || "include";
    console.log(url, options)
    return fetch(url, options).then(parseJSON);
}

export default {
    GET: (req: ReqOptions): Promise<Response> => request("GET", req),
    POST: (req: ReqOptions): Promise<Response> => request("POST", req),
    PUT: (req: ReqOptions): Promise<Response> => request("PUT", req),
    DELETE: (req: ReqOptions): Promise<Response> => request("DELETE", req),
    PATCH: (req: ReqOptions): Promise<Response> => request("PATCH", req)
};
