import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHome = ({ service }) => {
    
    console.log(service)
    return (
        <>
            <div className="card card-compact w-full mx-auto md:w-12/12 lg:w-4/12 bg-base-100 shadow-xl">
                <figure><img className='w-full h-56' src={service.img
                } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{service.serviceName}</h2>
                    <p> {service.description.slice(0, 100) + '...'}</p>
                    <p className='font-bold'>Price: ${service.price}</p>
                </div>
                <button className="btn btn-outline btn-warning"><Link to={`/services/${service._id}`}>VIEW DETAILS</Link></button>
                
            </div>            
        </>
    );
};

export default ServicesHome;