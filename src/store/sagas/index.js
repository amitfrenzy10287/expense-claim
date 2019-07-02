import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchRoleSuccess } from "../actions";

const fetchRole = function*() {
  const response = yield call(axios.get, `http://localhost:9000/roles`);
  yield put(fetchRoleSuccess(response.data));
};

export default fetchRole;
