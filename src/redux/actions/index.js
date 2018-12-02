import { ADD_ARTICLE } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article});

export const toggleMenu = () => ({type: TOGGLE_MENU});