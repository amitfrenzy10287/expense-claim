import * as actionTypes from "./actionTypes";

export const fetchRoleSuccess = roles => {
  return {
    type: actionTypes.FETCH_ROLE_SUCCESS,
    roles
  };
}
export const fetchControls = () => {
    return {
        type: actionTypes.FETCH_CONTROLS
    };
};

export const setControls = (controls) => {
    return {
        type: actionTypes.SET_CONTROLS,
        controls
    };
};
