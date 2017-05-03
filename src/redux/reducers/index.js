import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { selectedCourse } from './selectedCourse';
import { careers } from './careers';
import { courses } from './courses';

console.log(selectedCourse)

const rootReducer = combineReducers({selectedCourse, careers, courses});


export default rootReducer;
