import React from 'react';

const AddFormCrud = () => {
    return (
        <div>
            <div className='my-5 mx-5 px-5'>
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
                <div className="text-end">
                    <button className="btn btn-light my-3 w-25  shadow" style={{ borderRadius: '14px' }}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddFormCrud
