export const actions = {
  LOGIN: '@LOGIN',
  LOGOUT: '@LOGOUT',
};

export const login = (userInfo) => {
  return {
    type: actions.LOGIN,
    payload: userInfo,
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT,
  };
};
