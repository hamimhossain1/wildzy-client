import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHomeDetails = () => {
    return (
        <div>
            <h3 className='mt-40'>This is services home details</h3>

            <Link to='/home'>
                        <button className="btn btn-warning">GO BACK</button>
                    </Link>
        </div>
    );
};

export default ServicesHomeDetails;