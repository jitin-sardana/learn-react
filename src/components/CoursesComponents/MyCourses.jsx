import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults } from '../../actions/loadCoursesActions';
import TopBar from '../CommonComponents/TopBar';
import ErrorFallback from '../CommonComponents/ErrorFallback';

function MyCourses() {
    const dispatch = useDispatch();
    const enrolledCourses = useSelector(state => state.onlineCourses.enrolledCourses);
    const { courses } = useSelector(state => state.onlineCourses);
    useEffect(() => {
        if (!courses) {
            dispatch(getSearchResults());
        }
    }, []);
    const removeCourse = (course) => {
        dispatch({ type: 'DELETE_COURSE', payload: course })
    }
    try {
        return (<>
            <TopBar />
            <div className="container mt-4" style={{ width: '70%' }}>
                {enrolledCourses.length === 0 && <h4>You have not selected any course yet</h4>}
                {enrolledCourses.length > 0 && <h4>Enrolled Courses</h4>}
                <div className='row mt-4'>
                    {
                        Array.isArray(enrolledCourses) && enrolledCourses.map((item, i) => <div key={item.course_title} className="card cursor-pointer col-xs-12 col-md-12 col-sm-12 col-lg-3 ">
                            <img className="card-img-top" src={item.course_uri} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text text-dark"><strong>{item.course_title}</strong></p>
                                <p style={{ color: '#ccc' }}>{item.course_description}</p>
                                <p>{courses ? courses.categories[item.section].name : ''}</p>
                                <div>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span><br />
                                    <span className="bg-warning text-dark cursor-pointer" onClick={() => removeCourse(item)} > Remove Course </span>
                                </div>
                                <p className="card-text text-dark"><i className="fa fa-inr" aria-hidden="true"></i> {item.price}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </>
        )
    } catch (error) {
        return <ErrorFallback error={error} />
    }
}

export default MyCourses;