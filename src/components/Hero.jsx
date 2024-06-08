import React from 'react'
import "./Hero.css"
import slider1 from "../Images/hero-slider-1.jpg"
import slider2 from "../Images/hero-slider-2.jpg"
import slider3 from "../Images/hero-slider-3.jpg"
import hero1 from "../Images/hero-icon.png"

const Hero = () => {
  return (
        <section className="hero text-center" aria-label="home" id="home">

            <ul className="hero-slider" data-hero-slider>

                <li className="slider-item active" data-hero-slider-item>

                <div className="slider-bg">
                    <img src={slider1} width="1880" height="950" alt="" className="img-cover" />
                </div>

                <p className="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>

                <h1 className="display-1 hero-title slider-reveal">
                    For the love of <br />
                    delicious food
                </h1>

                <p className="body-2 hero-text slider-reveal">
                    Come with family & feel the joy of mouthwatering food
                </p>

                <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">View Our Menu</span>

                    <span className="text text-2" aria-hidden="true">View Our Menu</span>
                </a>

                </li>

                <li className="slider-item" data-hero-slider-item>

                <div class="slider-bg">
                    <img src={slider2} width="1880" height="950" alt="" className="img-cover" />
                </div>

                <p className="label-2 section-subtitle slider-reveal">delightful experience</p>

                <h1 className="display-1 hero-title slider-reveal">
                    Flavors Inspired by <br/>
                    the Seasons
                </h1>

                <p className="body-2 hero-text slider-reveal">
                    Come with family & feel the joy of mouthwatering food
                </p>

                <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">View Our Menu</span>

                    <span className="text text-2" aria-hidden="true">View Our Menu</span>
                </a>

                </li>

                <li className="slider-item" data-hero-slider-item>

                <div className="slider-bg">
                    <img src={slider3} width="1880" height="950" alt="" className="img-cover" />
                </div>

                <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>

                <h1 className="display-1 hero-title slider-reveal">
                    Where every flavor <br/>
                    tells a story
                </h1>

                <p className="body-2 hero-text slider-reveal">
                    Come with family & feel the joy of mouthwatering food
                </p>

                <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">View Our Menu</span>

                    <span className="text text-2" aria-hidden="true">View Our Menu</span>
                </a>

                </li>

            </ul>

            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
                <ion-icon name="chevron-back"></ion-icon>
            </button>

            <button className="slider-btn next" aria-label="slide to next" data-next-btn>
                <ion-icon name="chevron-forward"></ion-icon>
            </button>

            <a href="#" className="hero-btn has-after">
                <img src={hero1} width="48" height="48" alt="booking icon" />

                <span className="label-2 text-center span">Book A Table</span>
            </a>
        
        </section>
  )
}

export default Hero