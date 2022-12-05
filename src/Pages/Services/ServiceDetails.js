import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import SingleReview from './SingleReview';

const ServiceDetails = () => {
    const [userReview, setUserReview] = useState(null);
    console.log(userReview)

    const [isChange, setIsChange] = useState(true);

    const services = useLoaderData();
    const { img, price, serviceName, description, _id } = services;
    // console.log(services);
    const { user } = useContext(AuthContext)

    const handleUserReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const review = form.review.value;

        const userReview = {
            serviceId: _id,
            serviceName,
            price,
            img,
            name,
            email,
            photoURL,
            review
        }
        console.log(userReview)

        fetch(`http://localhost:5000/userReview`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setIsChange(!isChange)
                    toast.success('Your review add successfully...!')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/userReview/${_id}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [_id, isChange])

    return (
        <>
            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Wildzy/serviceDetails&review</title>
            </Helmet>
            <h3 className='mt-32 mb-10 text-center text-3xl font-bold'>Products details and Review section</h3>
            <div className=' w-9/12 mx-auto grid grid-cols-2 gap-10'>


                <div className="card card-compact w-full  md:w-12/12 lg:w-12/12 bg-base-100 shadow-xl mb-10">
                    <figure><img className='w-full h-56' src={img
                    } alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{serviceName}</h2>
                        <p> {description}</p>
                        <p className='font-bold'>Price: ${price}</p>
                        <Link to='/allServices'>
                            <button className="btn btn-warning w-full">GO BACK</button>
                        </Link>
                    </div>
                </div>

                <div>
                    {user?.uid ?
                        <form onSubmit={handleUserReview} className='w-8/12 mx-auto'>
                            <div class="mb-6">
                                <label for="review" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Review</label>

                                <textarea type="text" id="review" name="review" className="textarea textarea-bordered w-full" placeholder="Your review here..."></textarea>
                            </div>
                            <button className="btn btn-warning w-full">Submit</button>
                        </form>
                        :
                        <div>
                            <p className='text-center mb-4 '>Please login to add a review</p>
                            <Link to='/login'>
                                <button className="btn btn-warning w-full">Login</button>
                            </Link>
                        </div>
                    }
                    <h1 className='mt-16 mb-0 font-bold text-center'>Users Reviews on this Service</h1>
                    <div className="divider"></div>

                    <div >
                        {
                            userReview?.map(singleReview => <SingleReview
                                key={singleReview._id}
                                singleReview={singleReview}
                            ></SingleReview>)
                        }

                    </div>
                </div>

            </div>
        </>
    );
};

export default ServiceDetails;