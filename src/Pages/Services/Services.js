import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
    const servicesAll = useLoaderData();
    console.log(servicesAll)
    return (

        <div className='mt-40 w-11/12 lg:w-9/12 mx-auto mb-20'>
            <h1 className='my-12 text-4xl font-bold text-purple-700 text-center'>Wildzy Services</h1>
            <div className='flex flex-col md:flex-col lg:flex-row  gap-5 justify-around'>
                {
                    servicesAll?.map(service => <AllServices
                        key={service._id}
                        service={service}
                    ></AllServices>)
                }
            </div>
        </div>
    );
};
export default Services;