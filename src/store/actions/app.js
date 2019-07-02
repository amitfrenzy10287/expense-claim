import * as actionTypes from "./actionTypes";

export const fetchRoleSuccess = roles => {
  return {
    type: actionTypes.FETCH_ROLE_SUCCESS,
    roles
  };
};
