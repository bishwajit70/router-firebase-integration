import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'
const auth = getAuth(app)

const Header = () => {

    const [user] = useAuthState(auth)
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
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                        :
                        <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/login'>Login</Link>
                }
            </nav>

        </div>
    );
};

export default Header;