import { ADD_ARTICLE } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article});

export const toggleMenu = menuToggleIsClicked => ({type: TOGGLE_MENU, payload: menuToggleIsClicked});