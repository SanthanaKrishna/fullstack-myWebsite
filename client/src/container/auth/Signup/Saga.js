import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_UP, signupSuccess, signupFailure } from './ActionCreator';
import SignUp from './ActionCreator';

// import { doGet } from '../../../api/fetchWrapper';

// const doGet = () => {
//     return fetch("locaslhost", {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: '',
//     })
// }
const doGets = (signUpDetails) => {
    console.log('axios')
    return axios.get(`localhost:3001/api/users`, {
        signUpDetails
    })
    // .then((response) => response.json())
}
// export function* signupUser(action) {
//     console.log('saga', action)
//     try {
//         console.log('saga')
//         const response = yield axios.get("https://localhost:3001/api/users", { action })
//         yield put(signupSuccess(response));
//     } catch (error) {
//         console.log('saga')
//         yield put(signupFailure(error))
//     }
// }

export function* signupUser(action) {
    console.log('saga', action)
    try {
        console.log('saga')
        const response = yield fetch("https://localhost:3001/api/users", { action })
        yield put(signupSuccess(response));
    } catch (error) {
        console.log('saga')
        yield put(signupFailure(error))
    }
}

export function* signupWatcher() {
    console.log('signupWatcher')
    yield takeLatest(SIGN_UP, signupUser)
    
}