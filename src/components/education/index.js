import React from 'react';
import './index.css';

const index = () => {
  return (
    <div className="education">
      <h1 className="header">Education</h1>
      <div className="education-entry">
        <h2 className=" header year">2022</h2>
        <div className="education-description">
          <h2 className="header">
            HackYourFuture,&nbsp;Web Development&nbsp;&nbsp;|&nbsp;&nbsp;
            <span className="underlined">Curriculum</span>
          </h2>
          <p>
            7-month coding Bootcamp with modules on HTML, CSS, JavaScript,
            NodeJs, ExpressJs, MySQL, and ReactJs
          </p>
        </div>
      </div>
      <div className="education-entry">
        <h2 className=" header year">2019&nbsp;-&nbsp;2021</h2>
        <div className="education-description">
          <h2 className="header">
            Eotvos Lorand University, Master studies in Data Science
          </h2>
          <p>
            This 2-year post-graduate program focuses in its theoretical part on
            the mathematical, and statistical ideas behind many machine learning
            algorithms, and its practical part it goes through the most
            widely-used libraries, and approaches to design, implement, and
            troubleshoot effective, and accurate machine learning models.
            Technologies used in the program includes, some and not all, python
            as main programming language, sklearn, and tensorflow (keras) as
            machine learning libraries to speed up the process of building and
            deploying machine learning models.
          </p>
        </div>
      </div>
      <div className="education-entry">
        <h2 className=" header year">2010&nbsp;-&nbsp;2016</h2>
        <div className="education-description">
          <h2 className="header">
            Tishreen University, Bsc Studies in Computer Networks and Systems
          </h2>
          <p>
            First 3 years were a general Computer Science Curriculum that
            included various mathematical, statistical and computer programming
            topics. The final two years were a more specialized program on how
            to design, implement and troubleshoot networks, and distributed
            systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
