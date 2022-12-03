import React, { useState } from 'react';
import toast from 'react-hot-toast';

const EditReviewModal = ({editReview}) => {
    console.log(editReview)
    const {review, _id} = editReview;

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
            toast.success('Review edited successfully.')
            // if(data.modifiedCount > 0){
            
            // }
        })
    }

    return (
        <>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5 text-gray-500">Edit your review</h3>
                    <input onChange={(e) => setEditedReview(e.target.value)} type="text" placeholder={review} className="input input-bordered w-full max-w-xs" /> <br></br><br></br>
                    <button onClick={() => handleEdit()} className="btn btn-warning mx-auto block">SUBMIT</button>
                </div>
            </div>
        </>
    );
};

export default EditReviewModal;