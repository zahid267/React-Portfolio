import React from 'react';
import './App.css';
//import code_refactor from '/public/images/code_refactor.png';

export default function Portfolio() {
  return (
    <div className="work">
      <h1>Portfolio</h1>
      <div>
          <span className="proj">
                <label className="projlbl" onClick={() => window.open('https://zahid267.github.io/code_refactor/')}>
                    <strong>Code Refactor</strong><br/>
                    <small>HTML/CSS</small><br />
                  <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/code_refactor')}>Git Repo</label>
                </label>
                <img src={'/images/code_refactor.png'} alt={'Code Refactor'}  width={`80%`} height={'100%'} />
                
            </span>


            <span className="proj">
                <label className="projlbl" onClick={() => window.open('https://zahid267.github.io/SportsPad/')}>
                    <strong>Sports Pad</strong><br />
                    <small>Server Side APIs</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/SportsPad')}>Git Repo</label>
                </label>
                <img src={'images/Sports_Pad_Demo.gif'} alt={'Sports Pad'}  width={`80%`} height={'100%'} />
            </span>
            
            <span className="proj">
                <label className="projlbl" onClick={() => window.open('https://note-taker-zahid.herokuapp.com/')}>
                    <strong>Note Taker</strong><br />
                    <small>Express.js</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/Note_Taker')}>Git Repo</label>
                </label>
                <img src={'images/Note_Taker_Demo.gif'} alt={'Note Taker'}  width={`80%`} height={'100%'} />
            </span>
            <span className="proj">
                <label className="projlbl" onClick={() => window.open('https://murmuring-headland-20273.herokuapp.com/')}>
                    <strong title="Project 2 - Marketing Revenue Tracker">Revenue Tracker</strong><br />
                    <small>Model View Controller</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/Revenue-Tracker')}>Git Repo</label>
                </label>
                <img src={'images/shop-list.png'} alt={'Marketing Revenue Tracker'}  width={`80%`} height={'100%'} />
            </span>
             
            <span className="proj">
                <label className="projlbl" onClick={() => window.open('https://degrassi-parliament-00065.herokuapp.com/')}>
                    <strong >Workout Tracker</strong><br />
                    <small>NoSQL - MongoDB</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/workout_tracker')}>Git Repo</label>
                </label>
                <img src={'images/Fitness_Tracker.gif'} alt={'Workout Tracker'}  width={`80%`} height={'100%'} />
            </span>
            <span className="proj">
                <label className="projlbl" onClick={() => window.open('https://fierce-fjord-72791.herokuapp.com/')}>
                    <strong alt="Online/Offline Budget Trackers">Budget Tracker</strong><br />
                    <small title="Offline Installation">PWA - NoSQL</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/Budget-Tracker')}>Git Repo</label>
                </label>
                <img src={'images/Budget-Tracker-screenshot.png'} alt={'Budget Tracker'}  width={`80%`} height={'100%'} />
            </span>
                         
                     
      </div>
      


    </div>
  );
}
