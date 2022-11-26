import React, { useEffect, useState } from 'react';

const ServicesHome = ({ service }) => {
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch(`https://wildzy-server.vercel.app/services`) 
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[])
    // const {img, description, serviceName} = service;
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
            </div>            
        </>
    );
};

export default ServicesHome;