import { CHANGE_THEME } from '../constants/theme';

const initialState = {
  theme: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};
