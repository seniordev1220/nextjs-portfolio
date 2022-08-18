import { BlogItem } from "./blogs/types";
import { ProjectItem } from "./projects/types";

export interface RootState {
  blog: {
    blogs: BlogItem[];
    blogItem: BlogItem;
    isLoading: boolean;
    error: any;
  },
  project: {
    projects: ProjectItem[];
    projectItem: ProjectItem;
    isLoading: boolean;
    error: any;
  },
  email: {
    isLoading: boolean;
    error: any;
  }
}