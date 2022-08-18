import { fork , all} from "redux-saga/effects";
import { blogsWatcher } from "./blogs/blogs";
import { emailWatcher } from "./email/email";
import { projectsWatcher } from "./projects/projects";

export default function* rootSaga():any {
    yield all([
        yield fork(blogsWatcher),
        yield fork(projectsWatcher),
        yield fork(emailWatcher)

    ]);
}

