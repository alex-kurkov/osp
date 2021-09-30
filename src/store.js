import { configureStore } from '@reduxjs/toolkit';
import { setNotificationMiddleWare } from './services/middlewares/notifications';
import reducer from './services/reducers';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: 'erofjerok',
      },
      serializableCheck: false,
    })
      .concat(setNotificationMiddleWare),
   devTools: process.env.NODE_ENV !== 'production',
})

export default store;
