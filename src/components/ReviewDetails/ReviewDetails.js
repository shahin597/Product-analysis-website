import React from 'react';
import './ReviewDetails.css';
import {RiChatQuoteFill} from 'react-icons/ri';
import{BsFillChatLeftQuoteFill} from 'react-icons/bs'
const ReviewDetails = ({reviews}) => {
   console.log(reviews)
   const {img,ratings, rev_user, rev_title} = reviews;
    return (
        <div className=' col-sm-12 col-md-4 my-3'>
                 <div className="card mb-3 review-card p-2  bg-body rounded shadow " >
                     {/* <h3>efhpahapfh</h3> */}
                     <div className="user-details d-flex m-3">
                         <img src={img} alt="_rev_user" />
                         <div className="user-more-details ms-3">
                             <h5 className=''> {rev_user}</h5>
                             <p>Ratings: {ratings}</p>   
                         </div>
                     </div>
                     <p><RiChatQuoteFill></RiChatQuoteFill>{ rev_title }<BsFillChatLeftQuoteFill/></p>
                  </div>
        </div>
    );
};

export default ReviewDetails;