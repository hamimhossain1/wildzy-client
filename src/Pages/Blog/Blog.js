import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Blog = () => {
    const {hamim} = useContext(AuthContext);
    return (
        <div>
            <h3>This is blog section</h3>
            <h1>Name: {hamim.age} <br></br>{hamim.name}</h1>
        </div>
    );
};

export default Blog;