import React from 'react';


// Components ......
import RenderTableCrud from '../components/RenderTableCrud';
import AddFormCrud from '../components/AddFormCrud';

const Home = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-4">
                    <RenderTableCrud/>
                </div>
                <div className="col-8">
                    <AddFormCrud />
                </div>
            </div>
        </div>
    )
}

export default Home;
