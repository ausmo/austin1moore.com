import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AM</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="www.facebook.com/ausmo"><FaFacebookF/></a>
        <a href="www.instagram.com/_austin__moore_/"><FiInstagram/></a>
        <a href="www.facebook.com/ausmo"><BsLinkedin/></a>
        <a href="www.facebook.com/ausmo"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>Made with love by Austin Moore</small>
      </div>
    </footer>
  )
}

export default footer