import React from 'react';
import aboutImage1 from '../../../Assets/aboutImage/about-img1.jpg'
import aboutImage2 from '../../../Assets/aboutImage/about-img2.jpg'

const About = () => {
    return (
        <div className="hero  mt-20 mb-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' lg:w-1/2 relative'>
                    <img src={aboutImage1} className=" w-10/12 h-full rounded-lg shadow-2xl" alt='elephants' />
                    <img src={aboutImage2} className=" w-3/5 border-8 top-1/2 right-5 absolute rounded-lg shadow-2xl" alt='tiger' />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl text-purple-700 font-bold mb-4'>About Wildzy</p>
                    <h1 className="text-5xl font-bold">Wildzy has award winning experience in this field!</h1>
                    <p className="py-6">Hi Friends! Wildzy Photography is a photography service based out of Western Colorado that’s run by me, Hamim! I’m here to capture the real moments and unforgettable stories that you will cherish for a lifetime in to the wild. I’m drawn to the authentic, making my creative approach inspired by documentary style influences. I want to help make your vision come to life, whether that entails adventurous hikes for that perfect spot, or finding it right in your near forest. Beautiful moments can be found anywhere, so let's find them together!</p>
                    <button className="btn btn-warning">SAY HELLO!</button>
                </div>
            </div>
        </div>
    );
};

export default About;