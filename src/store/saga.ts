import {all, select, take, call, put, takeEvery, delay} from 'redux-saga/effects';
import {ACTIONS} from './config';

function * currentState() {
    while (true) {
      const action = yield take('*');
      const state = yield select();
      console.log({action, state});
    }
}

function getUsers() {
  return fetch('https://reqres.in/api/users?page=2').then(r => r.json());
}

function * incrementAsync() {
  const users = yield call(getUsers);
  console.log({users});
  yield delay(3000);
  yield put({type: ACTIONS.INCREASE});
}

function * waitAsunc() {
  yield takeEvery(ACTIONS.ASYNC_INCREASE, incrementAsync);
}

export function * rootSaga() {
  yield all([
    currentState(),
    waitAsunc()
  ]);
}
