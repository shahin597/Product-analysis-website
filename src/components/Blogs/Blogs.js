import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h3 className="my-3">Few Question </h3>
      <div class="card text-white bg-secondary my-5">
        <div class="card-header">What is context api?</div>
        <div class="card-body">
          {/* <h5 class="card-title">Secondary card title</h5> */}
          <p class="card-text">
            {" "}
            Ans: The Context API is a React structure that enables you to
            exchange unique details and assists in solving prop-drilling from
            all levels of your application.
          </p>
        </div>
      </div>
      <div class="card text-white bg-secondary mb-5">
        <div class="card-header">Semantic tag?</div>
        <div class="card-body">
          <p class="card-text">
            Semantic HTML elements are those that clearly describe their meaning
            in a human- and machine-readable way. Elements such as header tag ,
            footer tag and article tag are all considered semantic because they
            accurately describe the purpose of the element and the type of
            content that is inside them
          </p>
        </div>
      </div>
      <div class="card text-white bg-secondary mb-5">
        <div class="card-header">
          What is the difference between inline, inline-block and block
          elements?
        </div>
        <div class="card-body">
          <p class="card-text">
            <h5>Inline:</h5>
            <p>
              {" "}
              inline The element doesn’t start on a new line and only occupy
              just the width it requires. You can’t set the width or height.some
              default inline property span,a,img{" "}
            </p>

            <h5>Inline-block:</h5>
            <p>
              {" "}
              inline-block It’s formatted just like the inline element, where it
              doesn’t start on a new line. BUT, you can set width and height
              values.
            </p>

            <h5>Block:</h5>
            <p>
              {" "}
              block The element will start on a new line and occupy the full
              width available. And you can set width and height values.Some default block property: div,h1,section
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
