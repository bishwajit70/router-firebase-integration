import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Products = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is product Page</h2>
            <h3>{user ? user.displayName : 'No body'}</h3>
        </div>
    );
};

export default Products;