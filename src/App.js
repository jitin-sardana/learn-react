import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './components/CommonComponents/TopBar';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Pages/Login';
import CourseDetailPage from './components/Pages/CourseDetailPage';
import MyCourses from './components/Pages/MyCourses';
import PreviewCourse from './components/Pages/PreviewCourse';
import SearchCourses from './components/Pages/SearchCourses';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
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
