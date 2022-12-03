import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Achievement from '../Achievement/Achievement';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import ServicesHome from '../ServicesHome/ServicesHome';




const Home = () => {
    const services = useLoaderData()
    // console.log(services)
    return (
        <div>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Wildzy/home</title>
            </Helmet>

            <Banner></Banner>
            <About></About>
            <Achievement></Achievement>
            <div className=' w-11/12 lg:w-9/12 mx-auto mb-20'>
                <h1 className='my-12 text-4xl font-bold text-purple-700 text-center'>Wildzy Services</h1>
                <div className='flex flex-col md:flex-col lg:flex-row  gap-5 justify-around'>
                    {
                        services?.map(service => <ServicesHome
                            key={service._id}
                            service={service}
                        ></ServicesHome>)
                    }
                </div>
                <Link to='/allServices'>
                    <button className="btn btn-warning mt-8 mx-auto block w-3/12 md:w-2/12 lg:w-1/12">SEE ALL</button>
                </Link>

            </div>

            {/* <ServicesHome></ServicesHome> */}
            <Activities></Activities>

        </div>
    );
};

export default Home;