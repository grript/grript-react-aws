import { ADD_ARTICLE } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';
import { INCREMENT, DECREMENT } from '../constants/action-types';
import { LOGIN_COGNITO } from '../constants/action-types';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article});

export const toggleMenu = () => ({type: TOGGLE_MENU});

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

export const loginCognito = () => ({type: LOGIN_COGNITO}); 