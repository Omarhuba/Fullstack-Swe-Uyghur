import React from 'react'
import {Button} from '../UI/Button'
import { Link } from 'react-router-dom'
import '../../Modules/layout/Footer.scss'





export const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-sub'>
        <p className='footer-sub-header'>Welcome To Our Football Club and Join Us!</p>
        <p className='footer-sub-text'>You can subscrip any time.</p>
        <div className='input-area'>
          <input className='footer-input' type="text" name="" placeholder='Type Your Email Here...' />
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Subscrip
          </Button>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2>About Us</h2>
            <Link  to={'/'}>How it works</Link>
            <Link  to={'/'}>About Teams</Link>
            <Link  to={'/'}>Docs</Link>
          </div>
          <div className='footer-links-items'>
            <h2>Contact Us</h2>
            <Link to={'/'}>Contact</Link>
            <Link to={'/'}>Support</Link>
            <Link to={'/'}>Help</Link>
          </div>
          <div className='footer-links-items'>
            <h2>Resources</h2>
            <Link to={'/'}>Blog</Link>
            <Link to={'/'}>Learn More</Link>
          </div>
          <div className='footer-links-items'>
            <h2>Join Us</h2>
            <Link to={'/'}>Get Started</Link>
            <Link to={'/'}>Subscrip</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link className='logo-link' to="/">Swe-Uyghur FC <i className='fab fa-typo3'/></Link>
          </div>
          <small className="website">SweUyghur © 2022</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to="/"
            target="_blank"
            area-aria-label='Facebook'
            >
              <i className="fab fa-facebook"/>
            </Link>
            <Link className='social-icon-link instagram' to="/"
            target="_blank"
            area-aria-label='Instagram'
            >
              <i className="fab fa-instagram"/>
            </Link>
            <Link className='social-icon-link youtube' to="/"
            target="_blank"
            area-aria-label='Youtube'
            >
              <i className="fab fa-youtube"/>
            </Link>
            <Link className='social-icon-link twitter' to="/"
            target="_blank"
            area-aria-label='Twitter'
            >
              <i className="fab fa-twitter"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
