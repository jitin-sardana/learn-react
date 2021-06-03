import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults } from '../../actions/loadCoursesActions';
import Loading from '../CommonComponents/Loading';
import { useHistory } from "react-router-dom";
import TopBar from '../CommonComponents/TopBar';
import ErrorFallback from '../CommonComponents/ErrorFallback';

function Dashboard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { courses, categories, loading, loginSuccessfull } = useSelector(state => state.onlineCourses);
    useEffect(() => {
        if (!courses && loginSuccessfull) {
            dispatch(getSearchResults());
        } else if (!loginSuccessfull) {
            history.push('/');
        }
    }, []);

    const selectedCategory = (selectedCategory) => {
        dispatch({ type: 'SELECTED_CATEGORY', payload: selectedCategory })
        history.push('/course-detail-page');
    }
    try {
        return (<>
            <TopBar />
            <Loading show={loading} />
            <div className="container-lg">
                <div className='row mt-4'>
                    {
                        Array.isArray(categories) && categories.map((item, i) => <div key={courses.categories[item].category_URI} onClick={() => selectedCategory(item)} className="card cursor-pointer col-xs-12 col-md-3 col-sm-12 col-lg-3 ml-3">
                            <img className="card-img-top" src={courses.categories[item].category_URI} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text text-dark"><strong>{courses.categories[item].name}</strong></p>
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

export default Dashboard;