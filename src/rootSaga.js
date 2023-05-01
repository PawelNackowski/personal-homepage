import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "./PersonalPage/Projects/portfolioSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPortfolio()
  ]);
};