import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import BreadCrumbs from '../CommonComponents/BreadCrumbs';
import ErrorFallback from '../CommonComponents/ErrorFallback';

function CourseDetailPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMessage, setShowMessage] = useState(false);
    const [enrolledCourse, setEnrolledCourse] = useState(null);

    const { selectedCategory, enrolledCoursesId, courses } = useSelector(state => state.onlineCourses);

    const enrollCourse = (course) => {
        setShowMessage(true);
        setEnrolledCourse(course.course_title);
        dispatch({ type: 'ENROLLED_COURSE', payload: course })
    }
    const redirectToPlay = (course) => {
        dispatch({ type: 'COURSE_TO_PLAY', payload: course })
        history.push('/preview-courses');
    }
    try {
        return (<>
            <div className="container">
                <BreadCrumbs links={[{ linkName: 'Home', linkUrl: '/dashboard' }, { linkName: courses.categories[selectedCategory].name, linkUrl: null }]} />

                <h4>All {courses.categories[selectedCategory].name} Courses</h4>
                {showMessage && <Alert variant="success" onClose={() => setShowMessage(false)} dismissible>
                    <Alert.Heading>You have enrolled for below course successfully!</Alert.Heading>
                    <p>{enrolledCourse}</p>
                </Alert>}
                {
                    courses.categories[selectedCategory].courses.map((item) => <><div className='row mt-4' >
                        <div className='col-lg-3 col-md-3 col-xs-12 col-sm-12 cursor-pointer' onClick={() => redirectToPlay(item)}>
                            <img width='260' height='145' src={item.course_uri} />
                        </div>
                        <div className='col-lg-7 col-md-7 col-xs-12 col-sm-12'>
                            <h4>{item.course_title}</h4>
                            <p style={{ color: '#ccc' }}>{item.course_description}</p>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                {enrolledCoursesId.indexOf(item.course_id) == -1 && <span className="bg-success text-white ml-2 cursor-pointer" onClick={() => enrollCourse(item)}> Enroll Now&nbsp; </span>}
                                {enrolledCoursesId.indexOf(item.course_id) > -1 && <span className="bg-info text-white ml-2"> Enrolled &nbsp; </span>}
                            </div>

                        </div>
                        <div className='col-lg-2 col-md-2 col-xs-12 col-sm-12'>
                            <h4><i className="fa fa-inr" aria-hidden="true"></i> {item.price} </h4>
                            <p style={{ color: '#ccc' }}><s>{item.old_price}</s></p>
                        </div>
                        <p></p>
                        <p></p>
                    </div><hr /></>)
                }
            </div>

        </>
        )
    } catch (error) {
        return <ErrorFallback error={error} />
    }

}

export default CourseDetailPage;