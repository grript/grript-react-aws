import { ADD_ARTICLE } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';
import { INCREMENT, DECREMENT } from '../constants/action-types';
import { LOGIN_COGNITO, LOGOUT, USER_IS_AUTHENTICATED, STOP_CHECKING_USER_SESSION } from '../constants/action-types';

const initialState = {
  articles: [],
  menuToggleIsClicked: false,
  count: 0,
  user: {},
  userIsAuthenticated: false,
  userCheckingSession: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case TOGGLE_MENU:
      return { ...state, menuToggleIsClicked: !state.menuToggleIsClicked};  
    case INCREMENT:
      return { ...state, count: state.count + 1}  
    case DECREMENT:
      return { ...state, count: state.count - 1} 
    case LOGIN_COGNITO:
      return { ...state, user: {name: 'Rocks'}}
    case LOGOUT:
      return { ...state, userIsAuthenticated: false}   
    case USER_IS_AUTHENTICATED:
      return { ...state, userIsAuthenticated: true}    
    case STOP_CHECKING_USER_SESSION:
      return { ...state, userCheckingSession: false}    
    default: 
      return state;
  }  
}  

export default rootReducer;