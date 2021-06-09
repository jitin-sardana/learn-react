import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Alert from 'react-bootstrap/Alert';
import BreadCrumbs from '../CommonComponents/BreadCrumbs';
import ErrorFallback from '../CommonComponents/ErrorFallback';

function PlayCoursePage() {

    const { enrolledCoursesId, courseToPlay, selectedCategory, courses: { categories } } = useSelector(state => state.onlineCourses);

    const history = useHistory();
    const dispatch = useDispatch();

    const [showMessage, setShowMessage] = useState(false);
    const { course_id, course_title, course_description, course_uri, price } = courseToPlay;

    const enrollCourse = (course) => {
        setShowMessage(true);
        dispatch({ type: 'ENROLLED_COURSE', payload: course })
    }
    try {
        return (<>
            <div className="container">
                <BreadCrumbs links={[{ linkName: 'Home', linkUrl: '/dashboard' }, { linkName: categories[selectedCategory].name, linkUrl: null, onClick: true }, { linkName: course_title, linkUrl: null }]} />
                {showMessage && <div className='mt-4'><Alert variant="success" onClose={() => setShowMessage(false)} dismissible>
                    <Alert.Heading>You have enrolled for this course successfully!</Alert.Heading>
                </Alert></div>}
                <div className='row mt-4'>
                    <div className='col-lg-7 col-md-12 col-xs-12 col-sm-12'>
                        <img src={course_uri} style={{ width: '100%' }} />
                    </div>
                    <div className='col-lg-5 col-md-12 col-xs-12 col-sm-12'>
                        <h2><strong>{course_title}</strong></h2>
                        <p>{course_description}</p>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span style={{ color: '#ccc' }}> (29,318 ratings) 32781 students</span>
                            <p><small style={{ color: '#ccc' }}><span className="fa fa-youtube-play"></span><span>  5hr 50 min of on-demand video</span></small></p>
                        </div>
                        <p><small style={{ color: '#ccc' }}>Created By: Edwin Diaz, Coding Faculty Solutions</small></p>
                        <p><span className="fa fa-inr"></span> {price}</p>
                        {enrolledCoursesId.indexOf(course_id) == -1 && <button className="btn btn-success ml-2 cursor-pointer" onClick={() => enrollCourse(courseToPlay)}> Enroll Now&nbsp; </button>}
                        {enrolledCoursesId.indexOf(course_id) > -1 && <button className="btn btn-info text-white ml-2" disabled={true}> Enrolled &nbsp; </button>}

                        <span className="btn btn-light ml-2" > <i className="fa fa-share"></i> Share </span>
                    </div>
                    <p></p>
                </div>

                <Tabs defaultActiveKey="learn" transition={false} id="noanim-tab-example">
                    <Tab eventKey="learn" title="What you'll learn">
                        <div className='mt-4'>
                            <p><i className="fa fa-check"></i><span> You will attend {course_title} </span></p>
                            <p><i className="fa fa-check"></i><span> You will learn basics of {course_title}</span></p>
                            <p><i className="fa fa-check"></i><span> You'll learn the essential tools for editing and manipulating images.</span></p>
                            <p><i className="fa fa-check"></i><span> You'll know how to edit photos (both RAW and compressed images) with a variety of tools and non-destructive methods.</span></p>
                            <p><i className="fa fa-check"></i><span> You'll learn how to use the layers panel including creating and editing layer masks</span></p>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Course content">
                        <p className='mt-4'>{course_description}</p>
                    </Tab>
                    <Tab eventKey="reviews" title="Reviews" >

                    </Tab>
                    <Tab eventKey="instructor" title="Instructor" >

                    </Tab>
                </Tabs>
            </div>

        </>
        )
    } catch (error) {
        return <ErrorFallback error={error} />
    }
}

export default PlayCoursePage;