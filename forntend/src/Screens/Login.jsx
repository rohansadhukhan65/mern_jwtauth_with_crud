import React from 'react';
import {useSelector, useDispatch} from 'react-redux'


// import actions
import {UserLogin} from '../actions/userActions';

const Login = () => {
    const loginResult = useSelector((s) => s.loginReducer)
    const dispatch = useDispatch()
    let userDetails = {name : "Rohan Sadhukhan", pwd:"123456"}
    return (
        <div className='login p-4 rounded-3 sha'>
            <h1 className='text-center fw-light'>Login {loginResult.name}</h1>

            <div className='my-5'>
                <div className="mb-3">
                    <label htmlFor="email" className="fw-light form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="fw-light form-label">Password</label>
                    <input type="text" className="form-control" id="pwd" placeholder="Enter Password..." />
                </div>
                <div className="text-center">
                    <button onClick={()=>{dispatch(UserLogin(userDetails))}} className="btn btn-light my-3 w-50  shadow" style={{ borderRadius: '14px' }}>Login</button>
                </div>
            </div>


        </div>
    )
}

export default Login
