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

function* getBlogsSaga(action: { type: string, payload: { showHidden: boolean, limit:number, offset:number } }): any {
    try {
        const response = yield call(getBlogsApi,  action.payload.showHidden, action.payload.limit, action.payload.offset);
        yield put(getBlogsSuccess(response.data.blogs));
    } catch (e) {
        yield put(getBlogsFailed(e));
    }
}

function* getBlogItemSaga(action: { type: string, payload: { id: number } }): any {
    try {
        const response = yield call(getBlogItemApi, action.payload.id);
        yield put(getBlogItemSuccess(response.data.blog));
    } catch (e) {
        yield put(getBlogItemFailed(e));
    }
}

function* addBlogSaga(action: { payload: { data: BlogItem, closeModal: () => void } }) {
    try {
        yield call(addBlogApi, action.payload.data);
        yield put(addBlogSuccess(null));
        yield put(getBlogs({showHidden:true}))
        yield call(action.payload.closeModal)
    } catch (e) {
        yield put(addBlogFailed(e));
    }
}

function* updateBlogSaga(action: { payload: { data: BlogItem, closeModal: () => void } }) {
    try {

        yield call(updateBlogApi, action.payload.data);
        yield put(editBlogItemSuccess(null));
        yield put(getBlogs({showHidden:true}))
        yield call(action?.payload?.closeModal)
    } catch (e) {
        yield put(editBlogItemFailed(e));
    }
}

function* deleteBlogSaga(action: { type: string, payload: number; }) {
  
    try {
        yield call(deleteBlogApi, action.payload);
        yield put(deleteBlogItemSuccess(null));
        yield put(getBlogs({showHidden:true}))
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
