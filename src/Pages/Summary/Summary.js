import React from 'react';
import { Helmet } from 'react-helmet';

const Summary = () => {
    return (
        <div className='mt-52 mb-36'>
            {/* react helmet for dynamic title  */}
        <Helmet>
                <title>Wildzy/summary</title>
            </Helmet>
            <p className='text-center text-2xl'>Thank you for taking our services...!!!</p>
        </div>
    );
};

export default Summary;