import React from 'react';
import activitiesImg2 from '../../../Assets/activitiesImg/activities-img2.jpg'
import {  FaCanadianMapleLeaf,  FaViadeo, FaVideo } from 'react-icons/fa';

const Activities = () => {
    return (
        <div className='mb-12 lg:mb-32 '>
            <h1 className='text-4xl font-bold text-purple-700 text-center'>Come Get Involved With Wildzy</h1>
            <p className='text-center mb-12 mt-3 w-10/12 lg:w-5/12 mx-auto'>Hi there! I am so excited to meet you and help tell your story!  Below are a few of the packages I offer.  Please feel free to reach out with any questions, packages can be flexible based on time and locations! I can’t wait to hear from you and work together to create something truly unique to you.</p>
            <div className=' lg:flex justify-around w-11/12 mx-auto'>

                {/*--- activities list--- */}
                <div className=" mb-10 lg:mb-0  md:w-8/12 mx-auto  lg:w-3/12  bg-base-200 ">

                    <div className='mx-auto mt-4 w-10/12'>
                        <h2 className="card-title">Wildlife Animal</h2>
                        <p>Wildlife refers to undomesticated animal species, but has come to include all organisms that grow or live. </p>
                        <div className="divider "></div>
                    </div>
                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Support Wildlife</h2>
                        <p>Wildlife conservation refers to the practice of protecting wild species and their habitats in order.</p>
                        <div className="divider "></div>
                    </div>
                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Force For Nature</h2>
                        <p>Force of nature is on a mission to improve the quality of our environment and our health while answering the call.</p>
                        <div className="divider "></div>
                    </div>
                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Extinction Worldwide</h2>
                        <p>The extinction of an animal species occurs when the last individual member of that species dies. </p>
                        <div className="divider "></div>
                    </div>
                </div>

                {/*--- activities image--- */}
                <div className="  lg:w-3/12  mb-12 lg:mb-0 ">
                    <div className=' h-full'>

                    <figure><img className='block mx-auto' src={activitiesImg2} alt="eagle bird" /></figure>
                    </div>

                </div>

                {/*--- activities presentation--- */}
                <div className=" md:w-8/12 mx-auto lg:w-3/12 ">
                    <div className='flex mb-12'>
                        <div>
                        <button className="btn btn-outline btn-success mr-2 mt-2"><FaCanadianMapleLeaf className='text-3xl'></FaCanadianMapleLeaf></button>
                        </div>
                        <div className=''>
                            <h2 className="card-title">Nature View</h2>
                            <p>The extinction of an animal species occurs when the last individual member of that species dies. Although a species may be "extinct in the wild," the species is not considered extinct until every individual</p>
                        </div>
                    </div>
                    <div className='flex mb-12'>
                        <div>
                        <button className="btn btn-outline btn-error mr-2 mt-2"><FaViadeo className='text-3xl'></FaViadeo></button>
                        </div>
                        <div className=''>
                            <h2 className="card-title">Geo Festival</h2>
                            <p>Geology Festival energizes the next generation of geoscience leaders, driving forward a vision of nature conservation, climate responsibility, and social benefit.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                        <button className="btn btn-outline btn-primary mr-2 mt-2"><FaVideo className='text-3xl'></FaVideo></button>
                        </div>
                        <div className=''>
                            <h2 className="card-title">Videography</h2>
                            <p>We promise that this is more than a job for us. Vow of the Wild is founded on authenticity. Actual, real authenticity. We’re humans, not just a business. So by the time we arrive at your elopemen.we plan on being more than another vendor. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;