import { put } from "redux-saga/effects";

import axios from "../../axios-config";
import * as actions from "../actions";

export function* bookMovieSaga(action) {
 
  yield put(actions.bookMovieStart());
  try {
    
    const response = yield axios.post(
      "https://bookmymovies-db.firebaseio.com/orders.json?auth=" + action.token,
      action.orderData
    );

    yield put(
      actions.bookMovieSuccess(response.data.name, action.orderData)
    );

    yield put(actions.bookMovieFinish());

  } catch (error) {
    yield put(actions.bookMoviesFailed(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  const queryParams =
    "?auth=" + action.token;
  try {
    const response = yield axios.get("https://bookmymovies-db.firebaseio.com/orders.json" + queryParams);
    const fetchedOrders = [];
    
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (error) {
    yield put(actions.fetchOrdersFail(error));
  }
}