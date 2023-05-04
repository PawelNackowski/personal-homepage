import { delay, put, call, takeLatest } from "redux-saga/effects";
import { fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess } from "./portfolioSlice";
import { getPortfolio } from "./getPortfolio";

const DELAY_ACTION = 2000;

function* watchFetchPortfolioHandler() {
  try {
    yield delay(DELAY_ACTION);
    const portfolio = yield call(getPortfolio);
    yield put(fetchPortfolioSuccess(portfolio));
  } catch (error) {
    yield put(fetchPortfolioError());
  }

}

export function* watchFetchPortfolio() {
  yield takeLatest(fetchPortfolio.type, watchFetchPortfolioHandler);
}