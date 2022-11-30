import React from 'react';

const AddService = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const description = form.description.value;
        console.log(name, photoURL, description)

        const productDetails = {
            name,
            photoURL,
            description
        }

        
    }
    return (
        <div className='mt-40 mb-20'>
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