import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SHOPPNG_DATA, shoppingPageSuccess, shoppingPageFailure } from './ActionCreator';


export function* shoppingPageAPI() {
    try {
        const response = yield axios.get('http://localhost:3001/shopping');
        console.log('response', response);
        yield put(shoppingPageSuccess(response.data))
    } catch (error) {
        yield put(shoppingPageFailure(error))
    }
}

export function* shoppingPageWatcher() {
    yield takeLatest(SHOPPNG_DATA, shoppingPageAPI)
}