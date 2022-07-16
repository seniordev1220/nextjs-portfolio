import { fork , all} from "redux-saga/effects";
import { blogsWatcher } from "./blogs/blogs";


export default function* rootSaga():any {
    yield all([
        yield fork(blogsWatcher)
    ]);
}

