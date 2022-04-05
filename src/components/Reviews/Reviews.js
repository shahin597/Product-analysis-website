import React, { useState } from 'react';
import './Reviews.css';
import useReview from '../../Hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [review] = useReview();

    return (
        <div className='my-5 container'>
             <h3 className='my-4'> Student Reviews</h3>
             <div className="row ">
                 <div className="col-md-12 col-sm-12">
                    <div className="row">  
                    {review?.map((reviews) => ( 
                         <ReviewDetails key={reviews.id} reviews = {reviews}/>
                     ))}
                    </div>
                 </div>
             </div>
        </div>
    );
};

export default Reviews;