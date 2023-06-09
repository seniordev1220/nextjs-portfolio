import { server } from "./request";

export const fetcher = (url: string) =>
  fetch(`${server}${url}`).then((res) => res.json());
