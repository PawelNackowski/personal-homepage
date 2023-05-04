import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import themeReducers from "./PersonalPage/Header/Content/ThemeButton/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducers
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;