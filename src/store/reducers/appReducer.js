import * as actionTypes from "../actions/actionTypes";

const initialState = {
  roles: [],
  loading: true
};

const fetchRoleSuccess = (state, action) => {
  const data = {
    loading: false,
    roles: action.roles
  };
  return { ...state, ...data };
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROLE_SUCCESS:
      return fetchRoleSuccess(state, action);
    default:
      return state;
  }
};

export default appReducer;
