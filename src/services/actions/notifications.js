import { removeNotification, addNotification } from "../reducers/control/controlSlice";

export const addSelfDestroyedNotification = (dispatch, payload) => () => {
  
  dispatch(addNotification(payload));
  if (payload?.lifetime) {
    setTimeout(() => {
      dispatch(removeNotification(payload.id))
    }, payload.lifetime)
  }
};