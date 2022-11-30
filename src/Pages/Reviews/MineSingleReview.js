import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';

const MineSingleReview = ({ singleReview }) => {
    const { serviceName, name, img, photoURL, review } = singleReview;
    return (
        <div className='mb-10'>
            <div className='relative  top-0 left-0    w-11/12 md:w-11/12 lg:w-6/12  mb-5  mx-auto mt-8 '>
                <div className=" bg-base-200 shadow-xl flex p-3 rounded-lg">
                    <div className="avatar mr-5 flex flex-col">
                        <div className="w-24 rounded-full mx-auto ring ring- ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                        <p className='text-center mt-2'>{name}</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="">
                        <h2 className="card-title">{serviceName}</h2>
                        <p>{review}</p>
                    </div>
                    <div className='absolute top-0 right-0 h-16 w-16 mt-2 '>
                        <div className='flex justify-around p-1 '>
                            <CiEdit className='text-2xl text-base-400 hover:bg-sky-200 mr-2'></CiEdit>
                            <AiOutlineDelete className='text-2xl text-red-600 hover:bg-sky-200'></AiOutlineDelete>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MineSingleReview;