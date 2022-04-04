import React from 'react';
import './Home.css';
import img from '../assets/hero-1.jpeg';
import HomeReview from '../HomeReview/HomeReview';
const Home = () => {
    return (
       <>
       <div className="container-full home">
          <div className='container py-5'>
            <div className="row">
                <div className="col-12 col-md-6 pt-5">
                    <h2 className='text-success'>Learn Web Development</h2>
                    <h4 className='fw-700 fs-1'>Online Course Tutorial From Qualified Instructor</h4>
                    <button className='btn btn-success mt-5'>Explore More</button>
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