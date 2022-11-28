import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const AllServices = ({ service }) => {
    const { img, serviceName, description, price, _id } = service;
    return (
        <>
            <div className="card card-compact w-full mx-auto md:w-12/12 lg:w-12/12 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img} >
                        <figure><img className='w-full h-56' src={img
                        } alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title font-bold">{serviceName}</h2>
                    <p> {description.slice(0, 100) + '...'}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <Link to={`/allServices/${_id}`}>
                        <button className="btn btn-warning">VIEW DETAILS</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AllServices;