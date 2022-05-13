import React from 'react';
import './index.css';
import Skill from './Skill';

const skills = [
  'HTML',
  'CSS',
  'Flexbox',
  'JavaScript',
  'Responsive Design',
  'MySQL',
  'MongoDB',
  'Git',
  'Java',
  'Python',
  'ReactJs',
  'Nodejs',
  'expressjs',
  'Machine Learning',
  'Problem Solving',
  'Motivated',
];

const index = () => {
  return (
    <>
      <h1 className="header">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          return <Skill key={index}>{skill}</Skill>;
        })}
      </div>
    </>
  );
};

export default index;
