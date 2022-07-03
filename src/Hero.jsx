import React from "react";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";

const fontSize ={
 fontSize: "48px",
 color: "#545454"
   
}

const Hero = ()=>{
    return(
        <>


            <section id="hero" className="hero">
            <div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
 <div className="item carousel-item swiper-slide active first-divv">
            <h1 className=" display-1 hero-h" >Welcome to Eterna</h1>
            <p className="hero--p">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
            <button className="hero-b">Read more</button>
        
 </div>
 <div className="item carousel-item swiper-slide secnd-divv">
 <h1 className="display-1 hero-h">Lorem Ipsum Dolor</h1>
            <p className="hero--p">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.

Read More</p>
            <button  className="hero-b">click me</button>
 </div>
 <div className="item carousel-item swiper-slide thrd-divv">
 <h1 className="display-1 hero-h">Sequi ea Dime Lara</h1>
            <p className="hero--p">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.

Read More</p>
            <button  className="hero-b">click me</button>
 </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
</button>
</div>
</div>
  </section>
        </>
    )
}

export default Hero;