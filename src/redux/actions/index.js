import { ADD_ARTICLE } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';
import { INCREMENT, DECREMENT } from '../constants/action-types';
import { LOGIN_COGNITO, LOGOUT, USER_IS_AUTHENTICATED, STOP_CHECKING_USER_SESSION } from '../constants/action-types';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article});

export const toggleMenu = () => ({type: TOGGLE_MENU});

export const increment3 = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

export const loginCognito = () => ({type: LOGIN_COGNITO}); 
export const userIsAuthenticated = () => ({type: USER_IS_AUTHENTICATED}); 
export const stopCheckingUserSession = () => ({type: STOP_CHECKING_USER_SESSION});
export const logout = () => ({type: LOGOUT});