import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'
const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <h2 className='text-2xl pb-4'>Please Login</h2>
            <form>
                <input className='border p-3 w-full md:w-1/4 grid mx-auto mb-5' type="email" name="email" id="email" placeholder='Your Email' />
                <input className='border p-3 w-full md:w-1/4 grid mx-auto mb-5' type="password" name="password" id="password" placeholder='password' />
                <input className='border p-3 w-full cursor-pointer bg-orange-500 hover:bg-orange-400 text-white rounded-md text-xl md:w-1/4 grid mx-auto' type="submit" value="Login" />
            </form>
            <button onClick={handleGoogleSignIn} className='border  mt-5 p-3 w-full cursor-pointer bg-blue-600 hover:bg-blue-500 text-white rounded-md text-xl md:w-1/4 grid mx-auto' > Sign In with Google </button>

        </div >
    );
};

export default Login;