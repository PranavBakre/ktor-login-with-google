import { all, put, select, takeEvery } from "redux-saga/effects";
import {
  DeleteUserAddressFailure,
  DeleteUserAddressSuccess,
  InsertUserAddressFailure,
  InsertUserAddressSuccess,
  LoadUserAddressesFailure,
  LoadUserAddressesSuccess,
  UpdateUserAddressFailure,
  UpdateUserAddressSuccess,
} from "./action";
import AddressConsts from "./action.types";

function* insertAddress(action) {
  try {
    let token = yield select((state) => state.login.accessToken);
    let addresses = yield fetch("/address", {
      method: "post",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    }).then((response) => response.json())
      .catch((error) => {
        throw (error);
      });
    yield put(InsertUserAddressSuccess(addresses));
  } catch (error) {
    yield put(InsertUserAddressFailure(error));
  }
}

function* updateAddress(action) {
  try {
    let token = yield select((state) => state.login.accessToken);
    let addresses = yield fetch("/address", {
      method: "put",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    }).then((response) => response.json())
      .catch((error) => {
        throw (error);
      });
    yield put(UpdateUserAddressSuccess(addresses));
  } catch (error) {
    yield put(UpdateUserAddressFailure(error));
  }
}

function* deleteAddress(action) {
  try {
    let token = yield select((state) => state.login.accessToken);
    let addresses = yield fetch("/address/" + action.payload, {
      method: "delete",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({"address-id":action.payload})
    }).then((response) => response.json())
      .catch((error) => {
        throw (error);
      });
    yield put(DeleteUserAddressSuccess(addresses));
  } catch (error) {
    yield put(DeleteUserAddressFailure(error));
  }
}

function* loadAddresses(action) {
  try {
    let token = yield select((state) => state.login.accessToken);
    let addresses = yield fetch("/address", {
      method: "get",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }).then((response) => response.json())
      .catch((error) => {
        throw (error);
      });
    yield put(LoadUserAddressesSuccess(addresses));
  } catch (error) {
    yield put(LoadUserAddressesFailure(error));
  }
}

export default function* addressSaga() {
  yield all([
    yield takeEvery(AddressConsts.INSERT_USER_ADDRESS, insertAddress),
    yield takeEvery(AddressConsts.LOAD_USER_ADDRESSES, loadAddresses),
    yield takeEvery(AddressConsts.UPDATE_USER_ADDRESS, updateAddress),
    yield takeEvery(AddressConsts.DELETE_USER_ADDRESS, deleteAddress),
  ]);
}
