import { takeEvery, put, call } from "redux-saga/effects";

import { getEmailsApi, sendEmailApi } from "../../services/email";
import {
  getEmails,
  getEmailsFailed,
  getEmailsSuccess,
  sendEmail,
  sendEmailFailed,
  sendEmailSuccess,
} from "../../store/email/reducer";
import { emailDataItem } from "../../store/email/types";

function* getEmailsSaga(action: {
  type: string;
  payload: { limit: number; offset: number };
}): any {
  try {
    const response = yield call(
      getEmailsApi,
      action.payload.limit,
      action.payload.offset,
    );
    yield put(getEmailsSuccess(response.data.emails));
  } catch (e) {
    yield put(getEmailsFailed(e));
  }
}
function* sendEmailSaga(action: {
  payload: { data: emailDataItem; reset: () => void };
}) {
  try {
    yield call(sendEmailApi, action.payload.data, true);
    yield put(sendEmailSuccess(null));
  } catch (e) {
    yield put(sendEmailFailed(e));
  }
}

export function* emailWatcher() {
  yield takeEvery(getEmails, getEmailsSaga);
  yield takeEvery(sendEmail, sendEmailSaga);
}
