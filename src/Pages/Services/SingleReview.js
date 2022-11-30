import React from 'react';

const SingleReview = ({ singleReview }) => {
    const { img, serviceName, review, name, photoURL } = singleReview;
    return (
        <div className='mb-5'>
            <div className=" bg-base-200 shadow-xl flex p-3 rounded-lg">
                <div className="avatar mr-5">
                    <div className="w-24 rounded-full ring ring- ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} />
                    </div>
                </div>                
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;