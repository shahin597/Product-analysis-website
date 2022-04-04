import React from 'react';
import error from '../assets/error.webp';
const NotFound = () => {
    return (
        <>
        <img className='mt-5' src={error} alt="error" />
        <div className='mt-2 container d-flex justify-content-center'>
          
            <h3 className='bg-secondary mt-3 p-3 text-warning w-50 '>No Url Found. ):</h3>
        </div>
        </>
    );
};

export default NotFound;