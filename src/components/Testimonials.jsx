import React from 'react';
import "./Testimonials.css";
import avatar from "../Images/testi-avatar.jpg";

const Testimonials = () => {
  return (
    <div>
      <section
        className="section testi text-center has-bg-image"
        style={{ backgroundImage: "url('../Images/testimonial-bg.jpg')" }}
        aria-label="testimonials"
      >
        <div className="quote">”</div>
        <p className="headline-2 testi-text">
          I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
        </p>
        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>
        <div className="profile">
          <img
            src={avatar}
            width="100"
            height="100"
            loading="lazy"
            alt="Sam Jhonson"
            className="img"
          />
          <p className="label-2 profile-name">Sam Jhonson</p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
