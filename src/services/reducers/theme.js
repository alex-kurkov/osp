import { TOGGLE_THEME } from '../constants'

const initialState = {
  active: 'dark',
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        active: state.active === 'light' ? 'dark' : 'light',
      }
    default:
      return state
  }
}
