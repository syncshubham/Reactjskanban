import React from 'react';
import "./cardDetail.css";

function CardDetails() {
  return (
    <div>
        <div className="container">  
  <form id="contact" action="" method="post">
    <h3>Task Creater Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabIndex="1" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabIndex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabIndex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
    </div>
  )
}

export default CardDetails