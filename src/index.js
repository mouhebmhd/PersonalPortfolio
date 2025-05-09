import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './views/Home';
import reportWebVitals from './reportWebVitals';
import Tools from './views/ToolsComponent';
import "./index.css"
import Skills from './views/SkillView';
import RecentWorks from './views/RecentWorks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecentWorks />
    {/* 
    Services
    Contact
    Profile
    */}
  </React.StrictMode>
);

reportWebVitals();
