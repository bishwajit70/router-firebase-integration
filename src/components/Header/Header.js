import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className='py-5'>
            <nav>
                <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/'>Home</Link>
                <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/products'>Products</Link>
                <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/orders'>Orders</Link>
                <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/register'>Register</Link>
                <span>{user?.displayName && user?.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/login'>Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;