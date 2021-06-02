import { combineReducers } from 'redux';
import onlineCoursesReducer from './onlineCoursesReducer';

const rootReducer = combineReducers({
  onlineCourses: onlineCoursesReducer
})

export default rootReducer;