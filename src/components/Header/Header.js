import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='py-5'>
            <nav>
                <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/'>Home</Link>
                <Link className='p-2 text-xl text-orange-600 hover:text-orange-300' to='/login'>Login</Link>
            </nav>

        </div>
    );
};

export default Header;