import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

// iport redux actions
import {UserRegister} from '../actions/userActions';
const Register = () => {
    const registerResult = useSelector((s)=> s.registrationReducer);
    const dispatch = useDispatch();
    let registerDetails = {
        name : "Rohan Sadhukhan",
        email:"sadhukhanrohan15@gmail.com", 
        pwd:"123456"
    }
    return (
        <div className='login p-4 rounded-3 sha'>
            <h1 className='text-center fw-light'>Register{registerResult.name}</h1>

            <div className='my-5'>
                
                <div className="mb-3">
                    <label htmlFor="email" className="fw-light form-label">Full Name</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Name..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="fw-light form-label">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="fw-light form-label">Password</label>
                    <input type="text" className="form-control" id="pwd" placeholder="Enter Password..." />
                </div>
                <div className="text-center">
                    <button onClick={()=>{dispatch(UserRegister(registerDetails))}} className="btn btn-light my-3 w-50  shadow" style={{ borderRadius: '14px' }}>Register</button>
                </div>
            </div>


        </div>
    )
}

export default Register
