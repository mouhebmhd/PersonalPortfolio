import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './views/Home';
import reportWebVitals from './reportWebVitals';
import Tools from './views/ToolsComponent';
import "./index.css"
import Skills from './views/SkillView';
import AboutMe from './views/AboutMe';
import SatisfiedClients from './views/SatisfiedClients';
import RecentWorks from './views/RecentWorks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SatisfiedClients />
    {/* 
    Services
    Contact
    Profile
    */}
  </React.StrictMode>
);

reportWebVitals();
