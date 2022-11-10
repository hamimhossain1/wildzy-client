import React from 'react';
import activitiesImg2 from '../../../Assets/activitiesImg/activities-img2.jpg'
import {  FaCanadianMapleLeaf,  FaViadeo, FaVideo } from 'react-icons/fa';

const Activities = () => {
    return (
        <div className='mb-8 '>
            <h1 className='text-4xl font-bold text-purple-700 text-center'>Come Get Involved With Wildzy</h1>
            <p className='text-center mb-12 mt-3 w-5/12 mx-auto'>Hi there! I am so excited to meet you and help tell your story!  Below are a few of the packages I offer.  Please feel free to reach out with any questions, packages can be flexible based on time and locations! I can’t wait to hear from you and work together to create something truly unique to you.</p>
            <div className='flex justify-around w-9/12 mx-auto'>

                {/*--- activities list--- */}
                <div className="card w-3/12  bg-base-200 shadow-xl">

                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Wildlife Animal</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="divider "></div>
                    </div>
                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Wildlife Animal</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="divider "></div>
                    </div>
                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Wildlife Animal</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="divider "></div>
                    </div>
                    <div className='mx-auto w-10/12'>
                        <h2 className="card-title">Wildlife Animal</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="divider "></div>
                    </div>
                </div>

                {/*--- activities image--- */}
                <div className=" w-3/12  ">
                    <div className=' h-full'>

                    <figure><img src={activitiesImg2} alt="Shoes" /></figure>
                    </div>

                </div>

                {/*--- activities presentation--- */}
                <div className=" w-3/12 ">
                    <div className='flex mb-3'>
                        <div>
                        <button className="btn btn-outline btn-success mr-2 mt-2"><FaCanadianMapleLeaf className='text-3xl'></FaCanadianMapleLeaf></button>
                        </div>
                        <div className=''>
                            <h2 className="card-title">Nature View</h2>
                            <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className='flex mb-3'>
                        <div>
                        <button className="btn btn-outline btn-error mr-2 mt-2"><FaViadeo className='text-3xl'></FaViadeo></button>
                        </div>
                        <div className=''>
                            <h2 className="card-title">Geo Festival</h2>
                            <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                        <button className="btn btn-outline btn-primary mr-2 mt-2"><FaVideo className='text-3xl'></FaVideo></button>
                        </div>
                        <div className=''>
                            <h2 className="card-title">Videography</h2>
                            <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;