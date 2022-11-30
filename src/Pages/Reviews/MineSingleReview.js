import React from 'react';

const MineSingleReview = ({singleReview}) => {
    const { serviceName, name, img, photoURL, review } = singleReview;
    return (
        <div className='mb-10'>
            <div className='w-11/12 md:w-11/12 lg:w-6/12  mb-5  mx-auto mt-8'>
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
                </div>
            </div>
        </div>
    );
};

export default MineSingleReview;