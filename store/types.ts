import { BlogItem } from "./blogs/types";

export interface RootState {
    blog: {
      blogs: BlogItem[];
      blogItem: BlogItem;
      isLoading: boolean;
      error: any;
    },
    project: {
      projects: BlogItem[];
      projectItem: BlogItem;
      isLoading: boolean;
      error: any;
    }
  }