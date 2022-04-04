import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h3 className="my-3">Answering The Important Question</h3>
      <div class="card text-white bg-secondary my-5" >
        <div class="card-header">What is context api?</div>
        <div class="card-body">
          {/* <h5 class="card-title">Secondary card title</h5> */}
          <p class="card-text">
            Context Api in react is a excelent tools to produce global variables that can be passed many components at defferent nesting levels so that code can be reused. Though it is more difficult but by using this we can avoid props drilling to the components.
            It is a react structure that allows us to exchange unique details and assists to slove props drilling from flowing up to down in our application. Generally, it returns a provider and a consumer. Provider work to store and be the parent of all parent the components. On the other hand Consumer provides state that is consumes and uses. 
          </p>
        </div>
      </div>
      <div class="card text-white bg-secondary mb-5" >
        <div class="card-header">Semantic tag?</div>
        <div class="card-body">
          <p class="card-text">
              Semantic elements is normally human readable form. It is clearly describes it's meaning to the developer as well as the browser. Such as form, table, article section, nav, aside,footer e.t.c.
              In react, Jsx that is stands for Javascripts XML. it allows us to write html element in react. As all semactic elements are belongs to the html elements that is the reason we can use semantic elements in react . Additionally, we can import semantic elements from react-dom , semantic-ui-react e.t.c
           </p>
        </div>
      </div>
      <div class="card text-white bg-secondary mb-5" >
        <div class="card-header">What is the difference between inline, inline-block and block elements?</div>
        <div class="card-body">
          <p class="card-text">
               <h5>Inline:</h5>
               <p>  Inline element doesn't start on a new line. its occupy the only width it requires. Cannot possible to set the width or height. 
                It laid out horizontally. </p>

               <h5>Inline-block:</h5>
               <p>  Inline element doesn't start on a new line but it's formatted like the inline element. Can possible to set the width or height values. 
               Inline-block elements makes a block element that's laid out horizontally like an inline element.</p>

               <h5>Block:</h5>
               <p>  Block element  start on a new line. its occupy the full width. Can possible to set the width or height.
             It laid out vertically by default.</p>

           </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
