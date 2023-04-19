import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    //destructuring user from authInfo
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h3>This is Home {user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Home;