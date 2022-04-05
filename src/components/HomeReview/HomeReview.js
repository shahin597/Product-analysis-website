import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import HomeReviewDetails from '../HomeReviewDetails/HomeReviewDetails';

const HomeReview = () => {
    const [review] = useReview();
    return (
        <div className='my-5 container'>
        <h3 className='my-4'>Student Reviews ({review?.slice(0,3).length})</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
               <div className="row">
               {review?.slice(0,3).map((reviews) => ( 
                    <HomeReviewDetails key={reviews.id} reviews = {reviews}/>
                ))}
               <div className="button">
               <Link to="/reviews" className='reviews-btn btn btn-success'>All Reviews</Link>
               </div>
               </div>
            </div>
        </div>
   </div>
    );
};

export default HomeReview;