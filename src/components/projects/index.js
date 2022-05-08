import React from 'react';
import './index.css';

const index = () => {
  return (
    <div className="projects">
      <h1 className="header">Projects</h1>
      <div className="projects-listing">
        <div className="projects-entry">
          <h2 className="header">
            E-commerce App&nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://byk-ecommerce-demo.netlify.app/"
              rel="noreferrer"
              target={'_blank'}
            >
              Demo
            </a>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://github.com/BasharKhdr1992/e-commerce-demo"
              rel="noreferrer"
              target={'_blank'}
            >
              Code
            </a>
          </h2>
          <p className="description">
            Multi-page, Mobile First, API-Featured, Reactjs ecommerce demo app,
            with various advanced technique including (a custom hook for making
            multiple asynchronous api calls, and the context api)
          </p>
        </div>
        <div className="projects-entry">
          <h2 className="header">
            Countries App&nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://countries-react-basharkhdr1992.vercel.app/"
              rel="noreferrer"
              target={'_blank'}
            >
              Demo
            </a>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://github.com/BasharKhdr1992/countries-react"
              rel="noreferrer"
              target={'_blank'}
            >
              Code
            </a>
          </h2>
          <p className="description">
            Multi-page, Mobile First, API-Featured, Reactjs coutries browsing
            App. Technologies used includes Reactjs (latest version up to the
            time of writing this description), react-router-dom-v6, and a custom
            highlighter. The Data is being fetched from Coutries public API.
          </p>
        </div>
        <div className="projects-entry">
          <h2 className="header">
            Job Listing&nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://byk-job-listing-app.netlify.app/"
              rel="noreferrer"
              target={'_blank'}
            >
              Demo
            </a>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://github.com/BasharKhdr1992/job-listing"
              rel="noreferrer"
              target={'_blank'}
            >
              Code
            </a>
          </h2>
          <p className="description">
            Single-page, Reactjs application that includes an advanced fitering
            technique, for searching through fake job advertising data. What
            makes this app special to me is that it includes tag-based
            functional filtering to enrich the user experience. Of course,
            needless to say that the website provides a mobile-first, responsive
            layout.
          </p>
        </div>
        <div className="projects-entry">
          <h2 className="header">
            Todo App&nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://byk-todo-app.netlify.app/"
              rel="noreferrer"
              target={'_blank'}
            >
              Demo (Frontend part only)
            </a>
            &nbsp;&nbsp;| &nbsp;&nbsp;
            <a
              href="https://github.com/BasharKhdr1992/todo-app-MERN"
              rel="noreferrer"
              target={'_blank'}
            >
              Code (Full Stack Version)
            </a>
          </h2>
          <p className="description">
            Single-page, Mobile-first Reactjs application, with dark/light theme
            switcher. This app represents my first full stack application to be
            built using Reactjs as a frontend technology, Nodejs as a backend
            server, and MongoDB as a NoSQL Database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
