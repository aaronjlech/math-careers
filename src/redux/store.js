import { createStore, compose } from "redux";
import { data } from '../data';
import rootReducer from './reducers/index';

const defaultState = {
   courses: data.courses,
   careers: data.careers,
   selectedCourse: data.courses,
   selectedCareers: data.careers
};
console.log(defaultState)
const store = createStore( rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())
export default store;
