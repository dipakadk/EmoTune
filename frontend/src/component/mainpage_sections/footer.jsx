import React from 'react';
import footImage from "../../images/footer-bg.png";
import facebookIcon from "../../images/facebook-icon.png";    // Social media icon paths
import twitterIcon from "../../images/twitter-icon.png";      // Social media icon paths
import instagramIcon from "../../images/instagram-icon.png";  // Social media icon paths

export const Footer = () => {
  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${footImage})`,
          backgroundSize :'cover',
          backgroundPosition: 'center',
          display: 'block',
          height: '100%',
          width: '100%',
          zIndex: '1',
        }}
      >
        {/* About Section */}
        <div className="flex flex-row items-center justify-between p-16 pl-24 bg-center bg-cover sm:flex-row gap-x-32" >
          {/* Contact Column */}
          <div className='flex flex-col p-2 text-center text-white'>
            <h3 className='text-xl'>Contact Us</h3>
            <p>Phone: +977-9843745095</p>
            <p>Email: EmoTune@gmail.com</p>
          </div>

          {/* Social Media Column with Clickable Icons */}
          <div className='flex flex-col p-2 pr-4 text-center text-white '>
            <h3 style={{ fontSize: '1.25rem' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" 
                style={{
                  width: '30px', 
                  borderRadius: '50%' 
                }} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" style={{
                  width: '30px', 
                  borderRadius: '50%'
                }} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" style={{
                  width: '30px', 
                  borderRadius: '50%'
                }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
