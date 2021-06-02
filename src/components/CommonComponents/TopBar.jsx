import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
const TopBar = () => {
    const searchItem = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const { loginSuccessfull, allCourses } = useSelector(state => state.onlineCourses);

    const SearchCourses = (e) => {
        e.preventDefault();
        const searchResults = allCourses.filter(course => (course.course_title.toLowerCase().indexOf(searchItem.current.value) > -1 || course.course_description.toLowerCase().indexOf(searchItem.current.value) > -1) );
        dispatch({ type: 'SEARCH_COURSE', payload: searchResults });
        history.push('/search-courses');
    }
    const logOut = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_SUCCESS', payload: false });
        history.push('/');
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to="/dashboard"><span className='navbar-brand text-white'>Online Courses</span></Link>
                {loginSuccessfull && <><ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/dashboard"><span className='nav-link text-white'>Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/my-courses"><span className='nav-link text-white'>My Courses</span></Link>
                    </li>

                </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" ref={searchItem} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={(e) => SearchCourses(e)}>Search</button>
                    </form>
                <span className='nav-link text-white cursor-pointer' onClick={(e) => logOut(e)}>Logout</span></>}
            </div>
        </nav>

    </>
    );
}
export default TopBar;