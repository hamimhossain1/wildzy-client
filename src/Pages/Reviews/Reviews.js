import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import MineSingleReview from './MineSingleReview';

const Reviews = () => {
    const [myReview, setMyReview] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect( () => {
        fetch(`http://localhost:5000/userReview?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[user?.email])
    console.log(myReview)
    return (
        <div className='mt-36'>
            <h1 className='text-2xl font-bold text-center text-blue-300'>This is my Review Section</h1>
            <div className="divider w-11/12 md:w-11/12 lg:w-7/12 mx-auto"></div>

            {
                myReview?.map(singleReview => <MineSingleReview
                key={singleReview._id}
                singleReview={singleReview}
                ></MineSingleReview>)
            }
        </div>
    );
};

export default Reviews;