import { LOGIN, LOGOUT } from '../constants/auth';

const initialState = {
  username: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        username: null,
        token: null,
      };
    default:
      return initialState;
  }
};
