import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Blog = () => {

    return (
        <div className='w-9/12 mx-auto'>
            <p className='mt-5 text-center text-3xl font-bold text-base-300'>Blog Section</p>
            <div className="card mt-10 mb-10 w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">1. Difference between SQL and NoSQL.</h3>
                    <p>Ans:</p>
                </div>
            </div>
            <div className="card mt-10 mb-10 w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">2. What is JWT, and how does it work?</h3>
                    <p>Ans:</p>
                </div>
            </div>
            <div className="card mt-10 mb-10 w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">3. What is the difference between javascript and NodeJS?</h3>
                    <p>Ans:</p>
                </div>
            </div>
            <div className="card mt-10 mb-10 w-7/12 mx-auto  bg-base-300 shadow-xl">
                <div className="card-body">
                    <h3 className="card-title">4. How does NodeJS handle multiple requests at the same time?</h3>
                    <p>Ans:</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;