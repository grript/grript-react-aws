import { ADD_ARTICLE } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';

const initialState = {
  articles: [],
  menuToggleIsClicked: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case TOGGLE_MENU:
      console.log('state', state);
      return { ...state, menuToggleIsClicked: !state.menuToggleIsClicked};  
    default: 
      return state;
  }  
}  

export default rootReducer;