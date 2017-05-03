import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { selectedCourse } from './selectedCourse';
import { selectedCareers } from './selectedCareers';
import { careers } from './careers';
import { courses } from './courses';

console.log(selectedCourse)

const rootReducer = combineReducers({selectedCareers, selectedCourse, careers, courses});


export default rootReducer;
