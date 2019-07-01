import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from '../actions/actionTypes';
import { initMoviesAvailableSaga,initSeatsAvailableSaga } from "./watchActions";
import { bookMovieSaga, fetchOrdersSaga } from "./watchRoles";

export function* watchMovieBooking() { 
  yield takeEvery(actionTypes.INIT_MOVIES, initMoviesAvailableSaga);
  yield takeEvery(actionTypes.INIT_MOVIES, initSeatsAvailableSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.BOOK_MOVIE, bookMovieSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}