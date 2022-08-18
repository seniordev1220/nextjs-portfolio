import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { blogSlice } from './blogs/reducer';
import { emailSlice } from './email/reducer';
import rootSaga from '../saga';
import { projectSlice } from './projects/reducer';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    blog: blogSlice.reducer,
    email: emailSlice.reducer,
    project: projectSlice.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
