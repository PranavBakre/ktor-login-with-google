import { put, takeEvery } from "redux-saga/effects";
import { LoginFailure, LoginSuccess } from "./action";
import LoginConsts from "./action.types";

function* loginWithServer(action) {
  try {
    let loginToken = yield fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "access-token": action.payload }),
    }).then((response) => response.json())
      .catch((error) => {
        throw error;
      });
    //localStorage.setItem("AuthorizationJWT",loginToken["access-token"])
    yield put(LoginSuccess(loginToken));
  } catch (error) {
    yield put(LoginFailure(error));
  }
}

function* LoginWithServer() {
  yield takeEvery(LoginConsts.LOGGING_IN, loginWithServer);
}

export default LoginWithServer;
