import { takeEvery, put, call } from "redux-saga/effects";
import {
    getBlogsApi,
    getBlogItemApi,
    updateBlogApi,
    deleteBlogApi,
    addBlogApi
} from "../../services/blogs";
import {
    addBlog, addBlogFailed,
    addBlogSuccess, deleteBlogItem,
    deleteBlogItemFailed, deleteBlogItemSuccess,
    editBlogItem, editBlogItemFailed,
    editBlogItemSuccess, getBlogItem,
    getBlogItemFailed, getBlogItemSuccess,
    getBlogs, getBlogsFailed, getBlogsSuccess
} from "../../store/blogs/reducer";
import { BlogItem } from "../../store/blogs/types";

function* getBlogsSaga(action: { type: string }): any {
    console.log("sagaaaaaaaaaaaaaaa")
    try {
        const response = yield call(getBlogsApi);
        yield put(getBlogsSuccess(response.data));
    } catch (e) {
        yield put(getBlogsFailed(e));
    }
}

function* getBlogItemSaga(action: { type: string, payload: { id: number } }): any {
    try {
        const response = yield call(getBlogItemApi, action.payload.id);
        yield put(getBlogItemSuccess(response.data));
    } catch (e) {
        yield put(getBlogItemFailed(e));
    }
}

function* addBlogSaga(action: { payload: { data: BlogItem } }) {
    try {
        const { data } = action.payload;
        yield call(addBlogApi, data);
        yield put(addBlogSuccess(null));
    } catch (e) {
        yield put(addBlogFailed(e));
    }
}

function* updateBlogSaga(action: { payload: { data: BlogItem; }; }) {
    try {
        const { data } = action.payload;
        yield call(updateBlogApi, data);
        yield put(editBlogItemSuccess(null));
    } catch (e) {
        yield put(editBlogItemFailed(e));
    }
}

function* deleteBlogSaga(action: { payload: { data: any; }; }) {
    try {
        const { data } = action.payload;
        yield call(deleteBlogApi, data);
        yield put(deleteBlogItemSuccess(null));
    } catch (e) {
        yield put(deleteBlogItemFailed(e));
    }
}

export function* blogsWatcher() {
    yield takeEvery(getBlogs, getBlogsSaga);
    yield takeEvery(getBlogItem, getBlogItemSaga);
    yield takeEvery(addBlog, addBlogSaga);
    yield takeEvery(editBlogItem, updateBlogSaga);
    yield takeEvery(deleteBlogItem, deleteBlogSaga);
}
