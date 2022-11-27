import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    return (
        <div>
            <h4 className='mt-40'>This is service details..........!!!!!!!!!</h4>



            <Link to='/allServices'>
                        <button className="btn btn-warning">GO BACK</button>
                    </Link>
        </div>
    );
};

export default ServiceDetails;