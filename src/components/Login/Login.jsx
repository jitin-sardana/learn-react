import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TopBar from '../CommonComponents/TopBar';
import './Login.scss';

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    const signingIn = (event) => {
        event.preventDefault();
        dispatch({ type: 'LOGIN_SUCCESS', payload: true });
        history.push('/dashboard');
    }
    return (<>
        <TopBar />
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first mt-4">
                    <h2> Login to experience easy way of learning</h2>
                </div>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" onClick={(e) => signingIn(e)} />
            </div>
        </div>
    </>
    );
}

export default Login;