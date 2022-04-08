import React from 'react';

const Register = () => {
    return (
        <div>
            <h2 className='text-2xl pb-4'>Please Register Now</h2>
            <form>
                <input className='border p-3 w-full md:w-1/4 grid mx-auto mb-5' type="text" name="name" id="name" placeholder='Your Name' />
                <input className='border p-3 w-full md:w-1/4 grid mx-auto mb-5' type="email" name="email" id="email" placeholder='Your Email' />
                <input className='border p-3 w-full md:w-1/4 grid mx-auto mb-5' type="password" name="password" id="password" placeholder='Password' />
                <input className='border p-3 w-full cursor-pointer bg-orange-500 hover:bg-orange-400 text-white rounded-md text-xl md:w-1/4 grid mx-auto' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;