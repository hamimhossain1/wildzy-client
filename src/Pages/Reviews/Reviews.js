import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Reviews = () => {
    const [myReview, setMyReview] = useState({});

    const {user} = useContext(AuthContext);

    useEffect( () => {
        fetch(`http://localhost:5000/userReview?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[user?.email])
    console.log(myReview)
    return (
        <div className='mt-36'>
            <h1 className='text-2xl font-bold text-center'>This is my Review Section</h1>
        </div>
    );
};

export default Reviews;