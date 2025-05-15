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
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import WhoAmI from './views/WhoAmI';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/projects' element={<RecentWorks/>}></Route>
          <Route path='/tools' element={<Tools/>}></Route>
          <Route path='/about' element={<AboutMe/>}></Route>
          <Route path='/clients' element={<SatisfiedClients/>}></Route>
          <Route path='/whoami' element={<WhoAmI/>}></Route>
          {/* <Route path='*' element={<404/>}></Route> */}
      </Routes>
    </Router>
    

    
  </React.StrictMode>
);

reportWebVitals();
