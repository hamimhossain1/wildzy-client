import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
    const servicesAll = useLoaderData();
    // console.log(servicesAll)
    return (
        <div className='mt-36 w-11/12 lg:w-9/12 mx-auto mb-20'>
            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Wildzy/services</title>
            </Helmet>
            <h1 className='my-12 text-4xl font-bold text-purple-700 text-center'>Wildzy Services</h1>

            {servicesAll ?
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {
                        servicesAll?.map(service => <AllServices
                            key={service._id}
                            service={service}
                        ></AllServices>)
                    }
                </div>
                : 
                <p>"loading......"</p>
        }
        </div>
    );
};
export default Services;

