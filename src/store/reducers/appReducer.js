import * as actionTypes from '../actions/actionTypes';

const initialState = {
    authdata: null,
    token:null,
    loading: false,
    errorLogin:'',
    controls:{
        x1:0,
        y1:0,
        x2:0,
        y2:0,
    }
};

const loginSuccess = (state, action) => {
    const data = {
        loading: false,
        token:action.authdata.token,
        authdata:action.authdata.response,
    };
    return {...state, ...data};
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

const loginFailed = ( state, action ) => {
    return { ...state,...{ error: true, loading: false ,errorLogin : action.error} };
};

const logout = ( state, action ) => {
    return { ...state,...{ authdata: null, token: null } };
};

const appReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
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
