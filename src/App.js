import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/CoursesComponents/Dashboard';
import Login from './components/Login/Login';
import CourseDetailPage from './components/CoursesComponents/CourseDetailPage';
import MyCourses from './components/CoursesComponents/MyCourses';
import PreviewCourse from './components/CoursesComponents/PreviewCourse';
import SearchCourses from './components/CoursesComponents/SearchCourses';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/course-detail-page' component={CourseDetailPage} />
        <Route path='/my-courses' component={MyCourses} />
        <Route path='/preview-courses' component={PreviewCourse} />
        <Route path='/search-courses'  component={SearchCourses} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
