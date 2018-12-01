// this is only a demo file
// to test what the value is of the store
// in the dev tool using console.log
import store from "../redux/store/index";
import { addArticle } from "../redux/actions/index";
window.store = store;
window.addArticle = addArticle;