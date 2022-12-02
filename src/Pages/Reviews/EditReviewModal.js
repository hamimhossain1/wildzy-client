import React, { useState } from 'react';

const EditReviewModal = ({editReview}) => {
    console.log(editReview)
    const {email, review, _id} = editReview;

    const [editedReview, setEditedReview] = useState("");

    const handleEdit = () =>{
        console.log(editedReview)
        fetch(`http://localhost:5000/userReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({editedReview})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if(data.modifiedCount > 0){
            //     const remaining = myReview.filter(review => review._id !== id);
            //     const approving = myReview.find(review => review._id === id);
            //     const editReview = [...remaining, approving]
            //     setMyReview(editReview)
            // }
        })
    }

    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Edit your review</h3>
                    <h3 className="text-lg font-bold">{email}</h3>
                    {/* <p className="py-4">{review}</p> */}
                    
                    <input onChange={(e) => setEditedReview(e.target.value)} type="text" placeholder={review} className="input input-bordered w-full max-w-xs" /> <br></br><br></br>
                    <button onClick={() => handleEdit()} className="btn btn-warning mx-auto block">SUBMIT</button>
                </div>
            </div>
        </>
    );
};

export default EditReviewModal;