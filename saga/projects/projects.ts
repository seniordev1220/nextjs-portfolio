import { takeEvery, put, call } from "redux-saga/effects";

import {
  getProjectsApi,
  getProjectItemApi,
  updateProjectApi,
  deleteProjectApi,
  addProjectApi,
} from "../../services/projects";
import {
  addProject,
  addProjectFailed,
  addProjectSuccess,
  deleteProjectItem,
  deleteProjectItemFailed,
  deleteProjectItemSuccess,
  editProjectItem,
  editProjectItemFailed,
  editProjectItemSuccess,
  getProjectItem,
  getProjectItemFailed,
  getProjectItemSuccess,
  getProjects,
  getProjectsFailed,
  getProjectsSuccess,
} from "../../store/projects/reducer";
import { ProjectItem } from "../../store/projects/types";

function* getProjectsSaga(): any {
  // action: {
  // type: string;
  // payload: { showHidden: boolean; limit: number; offset: number };
  // }
  try {
    const response = yield call(
      getProjectsApi,
      // action.payload.showHidden,
      // action.payload.limit,
      // action.payload.offset
    );
    yield put(getProjectsSuccess(response.data.projects));
  } catch (e) {
    yield put(getProjectsFailed(e));
  }
}

function* getProjectItemSaga(action: {
  type: string;
  payload: { id: number };
}): any {
  try {
    const response = yield call(getProjectItemApi, action.payload.id);
    yield put(getProjectItemSuccess(response.data.project));
  } catch (e) {
    yield put(getProjectItemFailed(e));
  }
}

function* addProjectSaga(action: {
  payload: { data: ProjectItem; closeModal: () => void };
}) {
  try {
    yield call(addProjectApi, action.payload.data);
    yield put(addProjectSuccess(null));
    yield put(getProjects({ showHidden: true }));
    yield call(action.payload.closeModal);
  } catch (e) {
    yield put(addProjectFailed(e));
  }
}

function* updateProjectSaga(action: {
  payload: { data: ProjectItem; closeModal: () => void };
}) {
  try {
    yield call(updateProjectApi, action.payload.data);
    yield put(editProjectItemSuccess(null));
    yield put(getProjects({ showHidden: true }));
    yield call(action?.payload?.closeModal);
  } catch (e) {
    yield put(editProjectItemFailed(e));
  }
}

function* deleteProjectSaga(action: { type: string; payload: number }) {
  try {
    yield call(deleteProjectApi, action.payload);
    yield put(deleteProjectItemSuccess(null));
    yield put(getProjects({ showHidden: true }));
  } catch (e) {
    yield put(deleteProjectItemFailed(e));
  }
}

export function* projectsWatcher() {
  yield takeEvery(getProjects, getProjectsSaga);
  yield takeEvery(getProjectItem, getProjectItemSaga);
  yield takeEvery(addProject, addProjectSaga);
  yield takeEvery(editProjectItem, updateProjectSaga);
  yield takeEvery(deleteProjectItem, deleteProjectSaga);
}
