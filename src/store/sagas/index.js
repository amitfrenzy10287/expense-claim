import { call, put } from "redux-saga/effects";
// import axios from "axios";
import axios from "../../axios-config";
import { fetchRoleSuccess } from "../actions";

const fetchRole = function*() {
  const response = yield call(axios.get, `roles`);
  yield put(fetchRoleSuccess(response.data));
};

export default fetchRole;
