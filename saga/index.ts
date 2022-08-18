import { fork , all} from "redux-saga/effects";
import { blogsWatcher } from "./blogs/blogs";
import { emailWatcher } from "./email/email";

export default function* rootSaga():any {
    yield all([
        yield fork(blogsWatcher),
        yield fork(emailWatcher)

    ]);
}

