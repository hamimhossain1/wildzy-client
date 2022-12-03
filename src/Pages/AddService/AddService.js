import React from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const AddService = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.name.value;
        const img = form.photoURL.value;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(serviceName, img, price, description)

        const productDetails = {
            serviceName,
            img,
            price,
            description
        }
        console.log(productDetails)

        fetch(`http://localhost:5000/allServices`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('New service has added')
                form.reset();
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='mt-40 mb-20'>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Wildzy/addService</title>
            </Helmet>


            <h3 className='text-blue-300 text-2xl font-bold text-center mb-4'>Add Service You Like</h3>
            <div className="card w-10/12 lg:w-5/12 bg-blue-100 shadow-xl p-5 mx-auto">
                <form onSubmit={handleSubmit} className='w-8/12 mx-auto my-10'>

                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service name" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Photo URL</label>
                        <input type="text" id="photoURL" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PhotoURL" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Service Price</label>
                        <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service price" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Description</label>

                        <textarea type="text" id="description" name="description" className="textarea textarea-bordered w-full" placeholder="Product description"></textarea>
                    </div>

                    <button className="btn btn-warning w-full">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;