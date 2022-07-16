import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { blogSlice } from './blogs/reducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        blog: blogSlice.reducer,
        
      },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
