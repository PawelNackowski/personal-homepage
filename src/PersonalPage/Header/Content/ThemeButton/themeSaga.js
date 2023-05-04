import { select, call, takeEvery } from "redux-saga/effects";
import { selectDarkTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStrage";

function* saveThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectDarkTheme);
  yield call(saveThemeInLocalStorage, isDarkTheme);
}

export function* watchThemeFromLocalStorage() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}