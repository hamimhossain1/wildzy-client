import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto text-center '>
            <img className='w-6/12 block mx-auto mt-8' src="https://i.ibb.co/Z8nQXZS/error-Img.jpg" alt="error-Img" ></img>
            <button className="btn btn-warning  text-center"><Link to='/home'>Goback To Home</Link></button>
            
        </div>
    );
};

export default ErrorPage;