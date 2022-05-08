import React from 'react';
import './App.css';
import Intro from './components/ContactInfo';
import Skills from './components/skills';
import Education from './components/education';
import Projects from './components/projects';
import Others from './components/others';

const App = () => {
  return (
    <div className="wrapper">
      <Intro />
      <Skills />
      <Education />
      <Projects />
      <Others />
    </div>
  );
};

export default App;
