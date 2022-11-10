import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.css'

const CarouselItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full h-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-14 md:left-24 left-24  top-1/4">
                <h1 className=' text-3xl md:text-4xl md:mt-12 lg:text-6xl  font-bold text-white '>Capture <br /> Every Moment In <br /> The Wild World</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-3/5 md:w-2/5 left-14 md:left-24  top-1/2">
                <p className='text-white lg:text-xl md:mt-10'>Sign up for Wildzy’s Newsletter for intimate access to inspiring stories about adventure and the grit it takes to work as a conservation photographer, as well as tips and information about the gear he uses.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-14 md:left-24  top-3/4">
                <button className="btn btn-warning mr-5"><Link to='/signup'>Get Started</Link></button>
                <button className="btn btn-outline btn-warning"><Link to='/login'>Login Now</Link></button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default CarouselItem;