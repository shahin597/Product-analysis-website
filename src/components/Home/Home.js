import React from 'react';
import './Home.css';
import img from '../assets/hero-1.jpg';
import HomeReview from '../HomeReview/HomeReview';
const Home = () => {
    return (
       <>
       <div className="container-full home">
          <div className='container py-5'>
            <div className="row">
                <div className="col-12 col-md-6 pt-5">
                    <h5 className='text-success'>More than 4000+ student records available</h5>
                    <h2 className='fw-700 fs-1'>OnlineLearning - Online Course Tutorial From Top Instructor</h2>
                    <button className='btn btn-success mt-5'>View All Course</button>
                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={img} alt="" />
                   
                </div>
            </div>
        </div>
       </div>
        {/* <Reviews></Reviews> */}
        <HomeReview/>
       </>
    );
};

export default Home;