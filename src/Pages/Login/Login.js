import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const {   googleSignIn, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // form.reset()
        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            toast.success('Sign in successful...!')
            navigate(from, {replace: true});
        })
        .catch( error => {
            toast.error('error here:', error)
        })
        
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result =>{
            const user = result.user;
            console.log(user);
            toast.success('Google sign in successful...!')
            navigate(from, {replace: true});
        })
        .catch( error => {
            toast.error('error here:', error);
        })
    }


    return (
        <div className='mt-36 mb-12'>

            {/* react helmet for dynamic title  */}
            <Helmet>
                <title>Wildzy/login</title>
            </Helmet>

            <div className="card w-10/12 lg:w-5/12 bg-green-200 shadow-xl p-5 mx-auto">
                <h3 className='text-3xl font-bold text-center mb-4'>Login</h3>

                <form onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
                    </div>


                    
                    <div class="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='********' required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>

                    <button className="btn btn-warning w-full"><Link to='/home'>Login</Link></button>

                    <p className='mt-2'>Forget Password?</p>

                    <p className='uppercase text-center font-bold mt-5 '>Login with social account</p>
 
                    <div className="divider"></div>
                        
                    <div className='flex justify-center'>
                    <button className="btn btn-outline btn-warning btn-circle mr-3" ><FaFacebook></FaFacebook></button>

                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-active btn-circle mr-3" ><FaGoogle></FaGoogle></button>

                    <button className="btn btn-outline btn-error btn-circle mr-3" ><FaGithub></FaGithub></button>
                    </div>

                    <p className='text-center mt-3 mb-2'>Don't have an account yet? <Link to="/signup" className='text-decoration-none font-bold text-danger'>SignUp.</Link></p>
                </form>
            </div>


        </div>
    );
};

export default Login;