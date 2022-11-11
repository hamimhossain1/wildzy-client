import React from 'react';
import funFactsImg from '../../../Assets/funfactsImg/achivement-img.jpg'

const Achievement = () => {
    return (
        <div className="hero mb-12 lg:mb-24 " style={{ backgroundImage: `url(${funFactsImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="py-12">
                    <h1 className="mb-5 text-3xl md:text-3xl lg:text-5xl font-bold">Funfacts You should Know</h1>
                    <p className="mb-5 w-10/12 md:w-9/12 lg:w-10/12 mx-auto">Wildzy has an incredible achievement  as photography service and got some amazing awards for the eye catching photograph. Wildzy service is very  professional, but knows how to help you relax in front of the camera and keep things relaxed. Wildzy is always quick to reply and we got all of our engagement photos back earlier than expected.”</p>

                    <div className='md:flex justify-between w-8/12 mx-auto mt-12'>
                        <div className='mb-8'>
                            <h1 className='text-4xl'><span className='text-yellow-400 font-bold'>77</span> +</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div className='mb-8'>
                            <h1 className='text-4xl'><span className='text-yellow-400 font-bold'>358</span> +</h1>
                            <p>Territory Explore</p>
                        </div>
                        <div>
                            <h1 className='text-4xl'><span className='text-yellow-400 font-bold'>31</span> +</h1>
                            <p>Winning Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;