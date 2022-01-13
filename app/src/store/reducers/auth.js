import { actions } from '../actions/auth';

const initialState = {
  username: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      };
    case actions.LOGOUT:
      return {
        username: null,
        token: null,
      };
    default:
      return initialState;
  }
};
