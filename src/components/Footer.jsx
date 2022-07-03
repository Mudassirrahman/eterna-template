import React from "react";
export default function Footer(){
    return(<>
        <section className="footer">
     <div className="box-container ">
    <div className="box">  
      <h4> USEFUL LINKS</h4>
      <a href="#"><i className="fas fa-thin fa-chevron-right" /> Home</a>
      <a href="#"><i className="fas fa-thin fa-chevron-right" /> About</a>
      <a href="#"><i className="fas fa-thin fa-chevron-right" /> Services</a>
      <a href="#"><i className="fas fa-thin fa-chevron-right" />Terms of service</a>
      <a href="#"><i className="fas fa-thin fa-chevron-right" />Privacy policy</a>
    </div>
    <div className="box">
      <h4> OUR SERVICES</h4>
      <a href="#home">Web design</a>
      <a href="#dishes">Web development</a>
      <a href="#about">Product Management</a>
      <a href="#menu">Marketing</a>
      <a href="#review">Graphic design</a>
    </div>

    <div className="box">
      <h4>contect us</h4>
      <a href="#">+923339004604</a>
      <a href="#">+923006784608</a>
      <a href="#">mudassirrehman1989@gmail.com</a>
      <a href="#">abudllahmuhammad10@yahoo.com</a>
      <a href="#">rahim yar khan punjab pakistan</a>
      </div>
      <div className="box">
        <h4>About Eterna</h4>
        <p >Cras fermentum odio eu feugiat lide par naso tierra.Cras fermentum odio eu feugiat lide par naso tierra.</p>
        <div >
        <i className="fa-brands fa-twitter socl"></i>
        <i className="fa-brands fa-facebook-f socl"></i>
        <i className="fa-brands fa-instagram socl"></i>
        <i className="fa-brands fa-skype socl"></i>
        <i className="fa-brands fa-linkedin socl"></i>
        </div>
      </div>
  </div>
</section>
    </>)
}