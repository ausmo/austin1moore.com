import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/austin-moore-14134a1b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ausmo" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials