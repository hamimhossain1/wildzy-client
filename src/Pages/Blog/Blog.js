import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Blog = () => {
    const {hamim} = useContext(AuthContext);
    return (
        <div className='w-9/12 mx-auto'>
            <div className=''>
            <h3 className='text-3xl'>This is blog section</h3>
            <h1>Name: {hamim.age} <br></br>{hamim.name}</h1>
            </div>
        </div>
    );
};

export default Blog;