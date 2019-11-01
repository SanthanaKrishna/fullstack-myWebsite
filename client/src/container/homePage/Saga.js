import { put, takeLatest } from 'redux-saga/effects';
import { homePageSuccess, homePageFailure, HOMEPAGE_CONTENT } from './ActionCreator';
import axios from 'axios';

export const fetchUrl= axios.create({
    baseURL: 'http://localhost:3001'
})
// axios.get("http://localhost:3001/homepage")
export function* homePageAPI() {
    try {
        const response = yield axios.get("http://localhost:3001/homepage")
        yield put(homePageSuccess(response.data))
    } catch (error) {
        yield put(homePageFailure(error))
    }
}

export function* homePageWatcher() {
    yield takeLatest(HOMEPAGE_CONTENT, homePageAPI)
}