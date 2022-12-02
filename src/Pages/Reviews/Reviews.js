import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import EditReviewModal from './EditReviewModal';
import MineSingleReview from './MineSingleReview';

const Reviews = () => {
    const [myReview, setMyReview] = useState([]);
    const [editReview, setEditReview] = useState(null);
    console.log(myReview)

    const {user} = useContext(AuthContext);

    //---query a review by email---//
    useEffect( () => {
        fetch(`http://localhost:5000/userReview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    },[user?.email])
    console.log(myReview)

    //---delete a single my review---//
    const handleDelete = id =>{
        const proceed = window.confirm('Do you agree to delete?');
        if(proceed){
            fetch(`http://localhost:5000/userReview/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    toast.success('Deleted successfully')
                    const remaining = myReview.filter(myRev =>myRev._id !== id)
                    setMyReview(remaining);
                }
            })
        }
    }

   

    return (
        <div className='mt-36'>
            <h1 className='text-2xl font-bold text-center text-blue-300'>This is my Review Section</h1>
            <div className="divider w-11/12 md:w-11/12 lg:w-7/12 mx-auto"></div>


            {
                myReview?.map(singleReview => <MineSingleReview
                key={singleReview._id}
                singleReview={singleReview}
                handleDelete={handleDelete}
                setEditReview={setEditReview}
                
                ></MineSingleReview>)
            }
            {!myReview?.length && <h1 className='text-center text-2xl text-purple-300 my-16'>No reviews were added...!</h1>}

            {
                editReview && <EditReviewModal
                 editReview={editReview}
                 ></EditReviewModal>
            }
        </div>
    );
};

export default Reviews;