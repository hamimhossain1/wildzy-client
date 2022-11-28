import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { img, price, serviceName, description, _id } = services;
    // console.log(services);
    return (
        <>
        <h3 className='mt-32 mb-10 text-center text-3xl font-bold'>Products details and Review section</h3>
            <div className=' w-9/12 mx-auto grid grid-cols-2 gap-10'>


                <div className="card card-compact w-full  md:w-12/12 lg:w-12/12 bg-base-100 shadow-xl mb-10">
                    <figure><img className='w-full h-56' src={img
                    } alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{serviceName}</h2>
                        <p> {description}</p>
                        <p className='font-bold'>Price: ${price}</p>
                        <Link to='/allServices'>
                            <button className="btn btn-warning w-full">GO BACK</button>
                        </Link>
                    </div>
                </div>

                <form action="" className='w-8/12'>
                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required="" />
                    </div>

                <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo URL</label>
                        <input type="text" id="email" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PhotoURL" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
                        
                    <textarea className="textarea textarea-bordered w-full" placeholder="Your review"></textarea>
                    </div>

                    <button className="btn btn-warning w-full">Submit</button>
                <div className="divider "></div> 
                </form>

            </div>
        </>
    );
};

export default ServiceDetails;