import React from 'react';
import funFactsImg from '../../../Assets/funfactsImg/achivement-img.jpg'

const Achievement = () => {
    return (
        <div className="hero mb-24" style={{ backgroundImage: `url(${funFactsImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="py-12">
                    <h1 className="mb-5 text-5xl font-bold">Funfacts You should Know</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <div className='flex justify-between w-8/12 mx-auto mt-12'>
                        <div>
                            <h1 className='text-4xl'><span className='text-yellow-400 font-bold'>77</span> +</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div>
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