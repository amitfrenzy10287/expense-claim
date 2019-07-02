import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    errorLogin:'',
    controls:{
        x1:0,
        y1:0,
        x2:0,
        y2:0,
    },
    roles: [],
};

const fetchControls = (state, action) => {
    const data = {
        controls:state.controls
    };
    return {...state, ...data};
};

const setControls = (state, action) => {
    const data = {
        controls: action.controls
    };
    return {...state, ...data};
};
 
const fetchRoleSuccess = (state, action) => {
    const data = {
      loading: false,
      roles: action.roles
    };
    return { ...state, ...data };
  };

const appReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ROLE_SUCCESS: return fetchRoleSuccess(state, action);
        case actionTypes.FETCH_USER_SUCCESS: return loginSuccess(state, action);
        case actionTypes.FETCH_USER_FAIL: return loginFailed(state, action);
        case actionTypes.AUTH_INITIATE_LOGOUT: return logout(state, action);
        case actionTypes.FETCH_CONTROLS: return fetchControls(state, action);
        case actionTypes.SET_CONTROLS: return setControls(state, action);
        default:
            return state;
    }
};

export default appReducer;
