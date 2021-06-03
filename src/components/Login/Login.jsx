import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBar from '../CommonComponents/TopBar';
import ErrorFallback from '../CommonComponents/ErrorFallback';
import './Login.scss';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const username = useRef();
    const password = useRef();

    useEffect(() => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: false });
    }, []);

    const signingIn = (event) => {
        event.preventDefault();
        if (username.current.value.length && password.current.value.length) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: true });
            history.push('/dashboard');
        }
    }
    try {
        return (<>
            <TopBar />
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first mt-4">
                        <h2> Login to experience easy way of learning</h2>
                    </div>
                    <input type="text" ref={username} id="login" className="fadeIn second" name="login" placeholder="username" />
                    <input type="password" ref={password} id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={(e) => signingIn(e)} />
                </div>
            </div>
        </>
        )
    } catch (error) {
        return <ErrorFallback error={error} />
    }
}

export default Login;