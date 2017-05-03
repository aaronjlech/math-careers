import { createStore, compose } from "redux";
import { careers, courses } from '../data';
import rootReducer from './reducers/index';

const defaultState = {
   courses,
   careers,
   selectedCourse: "ALL"
};
console.log(defaultState)
const store = createStore( rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())
export default store;
