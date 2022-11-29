import React from 'react';

const AddService = () => {
    return (
        <div className='mt-40 mb-20'>
                <h3 className='text-2xl font-bold text-center mb-4'>Add Service You Like</h3>
            <div className="card w-10/12 lg:w-5/12 bg-yellow-400 shadow-xl p-5 mx-auto">
                <form action="" className='w-8/12 mx-auto'>
                    <div class="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo URL</label>
                        <input type="text" id="email" name="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter PhotoURL" required="" />
                    </div>

                    <div class="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>

                        <textarea className="textarea textarea-bordered w-full" placeholder="Your review"></textarea>
                    </div>

                    <button className="btn btn-warning w-full">Submit</button>
                    <div className="divider "></div>
                </form>
            </div>
        </div>
    );
};

export default AddService;