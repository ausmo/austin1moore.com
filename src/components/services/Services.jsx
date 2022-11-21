import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Developing</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>My strengths currently lie in the front-end, but I'm also learning backend.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Eager Learner</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I love coding and am constantly learning new things.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Once I learn more about backend, I'll be an even bigger asset for your team.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Attention to Detail</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I won't bother you with broken code due to a missing comma or misspelled word.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services