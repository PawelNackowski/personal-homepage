import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import themeReducers from "./PersonalPage/Header/Content/ThemeButton/themeSlice";
import portfolioReducers from "./PersonalPage/Projects/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducers,
    portfolio: portfolioReducers
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;