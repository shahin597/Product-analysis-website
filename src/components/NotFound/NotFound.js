import React from 'react';
import error from '../assets/404.png';
const NotFound = () => {
    return (
        <>
        <img className='mt-5' src={error} alt="error" />
        <div className='mt-2 container d-flex justify-content-center'>
          
            <h3 className='bg-secondary mt-3 p-3 text-warning w-50 '>Try Existing Page in Navbar</h3>
        </div>
        </>
    );
};

export default NotFound;