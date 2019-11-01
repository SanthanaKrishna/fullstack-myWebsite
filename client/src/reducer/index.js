import { combineReducers } from 'redux';
import { homePageReducer } from '../container/homePage/Reducer';
import { signupReducer } from '../container/auth/Signup/Reducer';
import { loginReducer } from '../container/auth/Login/Reducer';
import { shoppingPageReducer } from '../container/shopping/Reducer';
// import { loginReducer } from '../container/auth/Login/Reducer';

export const rootReducers = combineReducers({
    homePageState: homePageReducer,
    shoppingPageState: shoppingPageReducer,
    signupState: signupReducer,
    loginState: loginReducer
    // loginReducer
})