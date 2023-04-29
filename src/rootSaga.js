import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "./features/Projects/portfolioSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPortfolio()
  ]);
};