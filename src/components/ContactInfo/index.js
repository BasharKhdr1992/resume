import React from 'react';
import './index.css';
import personalImage from '../../images/personalphoto.jpg';

const index = () => {
  return (
    <div className="intro">
      <div className="bio-personal-photo">
        <div className="bio-section">
          <h1 className="header full-name">
            Bashar Khdr (Junior Full Stack Developer)
          </h1>
          <p className="bio">
            Bsc in computer networking and systems, Msc in Data science. I got
            my refugee status approved in the Netherlands. After switching
            between many fields in IT. I eventually found my passion at building
            web sites using the hottest, most demanding technologies like
            ReactJS, NodeJS, MySQL, and more. I am an active member on
            frontendmentor.io, solving challenges to keep myself busy, and to
            practice the aforementioned skills in order to practice building
            real-world projects
          </p>
        </div>
        <div className="personal-photo-container">
          <img
            src={personalImage}
            className="personal-photo"
            alt="Bashar Khdr"
          />
        </div>
      </div>
      <div className="contact-info-section">
        <div className="col-place">
          <div className="city-section">
            <h2 className="header mobile">City</h2>
            <p className="city">Hengelo</p>
          </div>
          <div className="country-section">
            <h2 className="header mobile">Country</h2>
            <p className="country">The Netherlands</p>
          </div>
        </div>
        <div className="col-contact-info">
          <p className="collapse">
            +31687770045&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
            <a href="mailto:bashar.khdr.DS.92@hotmail.com">
              bashar.khdr.DS.92@hotmail.com
            </a>
          </p>
          <div className="mobile">
            <h2 className="header mobile">Phone:</h2>
            <p>+31687770045</p>
            <h2 className="header mobile">Email Address</h2>
            <a href="mailto:bashar.khdr.DS.92@hotmail.com">
              bashar.khdr.DS.92@hotmail.com
            </a>
          </div>
          <h2 className="header mobile">Social Profiles</h2>
          <p className="social-profiles">
            <a
              href="https://github.com/BasharKhdr1992"
              rel="noreferrer"
              target={'_blank'}
            >
              Github
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/bashar-khdr-a07087193/"
              rel="noreferrer"
              target={'_blank'}
            >
              Linkedin
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a
              href="https://www.frontendmentor.io/profile/BasharKhdr1992"
              rel="noreferrer"
              target={'_blank'}
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
