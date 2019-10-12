import { combineReducers } from 'redux';
import { homePageReducer } from '../container/homePage/Reducer';
import { signupReducer } from '../container/auth/Signup/Reducer';
// import { loginReducer } from '../container/auth/Login/Reducer';

export const rootReducers = combineReducers({
    homePageState: homePageReducer,
    signupState: signupReducer
    // loginReducer
})