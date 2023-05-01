import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import portfolioReducers from "./PersonalPage/Projects/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioReducers
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;