import React from 'react';
import './App.css';

export default function Portfolio() {
  return (
    <div className="work">
      <h1>Portfolio</h1>
      <div>
          <span className="proj" style={{backgroundImage:'url("/images/code_refactor.png")'}}>
                <label className="projlbl" onClick={() => window.open('https://zahid267.github.io/code_refactor/')}>
                    <strong>Code Refactor</strong><br/>
                    <small>HTML/CSS</small>
                </label>
                <label className="projgit" onClick={() => window.open('https://github.com/zahid267/code_refactor')}>
                  <strong>Git Repo</strong>
                </label>
            </span>


            <span className="proj" style={{backgroundImage:'url("/images/Sports_Pad_Demo.gif")'}}>
                <label className="projlbl" onClick={() => window.open('https://zahid267.github.io/SportsPad/')}>
                    <strong>Sports Pad</strong><br />
                    <small>Server Side APIs</small>
                </label>
                <label className="projgit" onClick={() => window.open('https://github.com/zahid267/SportsPad')}>
                <strong>Git Repo</strong>
                </label>
            </span>
            
            <span className="proj" style={{backgroundImage:'url("/images/Note_Taker_Demo.gif")'}}>
                <label className="projlbl" onClick={() => window.open('https://note-taker-zahid.herokuapp.com/')}>
                    <strong>Note Taker</strong><br />
                    <small>Express.js</small>
                </label>
                <label className="projgit" onClick={() => window.open('https://github.com/zahid267/Note_Taker')}>
                <strong>Git Repo</strong>
                </label>
            </span>
            <span className="proj" style={{backgroundImage:'url("/images/shop-list.png")'}}>
                <label className="projlbl" onClick={() => window.open('https://murmuring-headland-20273.herokuapp.com/')}>
                    <strong title="Project 2 - Marketing Revenue Tracker">Revenue Tracker</strong><br />
                    <small>Model View Controller</small>
                </label>
                <label className="projgit" onClick={() => window.open('https://github.com/zahid267/Revenue-Tracker')}>
                <strong title="Project 2 - Marketing Revenue Tracker">Git Repo</strong>
                </label>
            </span>
             
            <span className="proj" style={{backgroundImage:'url("/images/Fitness_Tracker.gif")'}}>
                <label className="projlbl" onClick={() => window.open('https://degrassi-parliament-00065.herokuapp.com/')}>
                    <strong >Workout Tracker</strong><br />
                    <small>NoSQL - MongoDB</small>
                </label>
                <label className="projgit" onClick={() => window.open('https://github.com/zahid267/workout_tracker')}>
                <strong>Git Repo</strong>
                </label>
            </span>
            <span className="proj" style={{backgroundImage:'url("/images/Budget-Tracker-screenshot.png")'}}>
                <label className="projlbl" onClick={() => window.open('https://fierce-fjord-72791.herokuapp.com/')}>
                    <strong alt="Online/Offline Budget Trackers">Budget Tracker</strong><br />
                    <small title="Offline Installation">PWA - NoSQL</small>
                </label>
                <label className="projgit" onClick={() => window.open('https://github.com/zahid267/Budget-Tracker')}>
                <strong title="Online/Offline Budget Trackers">Git Repo</strong>
                </label>
            </span>
                         
                     
      </div>
      


    </div>
  );
}
