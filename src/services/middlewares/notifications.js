import { removeNotification } from "../reducers/control/controlSlice";

export const setNotificationMiddleWare = store => next => action => {
  if (action.type === 'control/addNotification' && action.payload?.lifetime) {
    const { dispatch } = store;
    setTimeout(() => {
      dispatch(removeNotification(action.payload.id))
    }, action.payload.lifetime)
  }
  return next(action);
};