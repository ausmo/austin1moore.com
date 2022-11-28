import React from 'react'
import './portfolio.css'
import ISS from '../../assets/ISS.png'
import BB from '../../assets/beerbuddies1.png'
import sC from '../../assets/sCprofile.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={ISS} alt="ISS Tracker" />
        </div>
        <h3>ISS Tracker (first bootcamp project) </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/ausmo/ISS-Tracker" className='btn' target='_blank'>Github</a>
          <a href="https://ausmo.github.io/ISS-Tracker/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={BB} alt="ISS Tracker" />
        </div>
        <h3>Beer Buddies (second bootcamp project) </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/ausmo/beer-buddies" className='btn' target='_blank'>Github</a>
          <a href="https://stark-ridge-23340.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={sC} alt="ISS Tracker" />
        </div>
        <h3>socialCode (third bootcamp project) </h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/ausmo/socialCode" className='btn' target='_blank'>Github</a>
          <a href="https://frozen-hollows-02049.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

      </div>
    </section>
  )
}

export default Portfolio