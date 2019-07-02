import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  errorLogin: "",
  controls: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  }
};

const fetchControls = (state, action) => {
  const data = {
    controls: state.controls
  };
  return { ...state, ...data };
};

const setControls = (state, action) => {
  const data = {
    controls: action.controls
  };
  return { ...state, ...data };
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
    case actionTypes.FETCH_CONTROLS:
      return fetchControls(state, action);
    case actionTypes.SET_CONTROLS:
      return setControls(state, action);
    default:
      return state;
  }
};

export default appReducer;
