import React from 'react';
import './App.css';
import code_refactor from '../../images/code_refactor.png';
import sports_pad_demo from '../../images/Sports_Pad_Demo.gif';
import note_taker_demo from '../../images/Note_Taker_Demo.gif';
import shop_list from '../../images/shop-list.png';
import fitness_tracker from '../../images/Fitness_Tracker.gif';
import budget_tracker from '../../images/Budget-Tracker-screenshot.png';

export default function Portfolio() {
  return (
    <div className="work">
      <h1>Portfolio</h1>
      <div>
          <span className="work">
                <label className="projlbl" onClick={() => window.open('https://zahid267.github.io/code_refactor/')}>
                    <strong>Code Refactor</strong><br/>
                    <small>HTML/CSS</small><br />
                  <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/code_refactor')}>Git Repo</label>
                </label>
                <img src={code_refactor} alt={'Code Refactor'}  width={`70%`} height={'150'} />
                
            </span>


            <span className="work">
                <label className="projlbl" onClick={() => window.open('https://zahid267.github.io/SportsPad/')}>
                    <strong>Sports Pad</strong><br />
                    <small>Server Side APIs</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/SportsPad')}>Git Repo</label>
                </label>
                <img src={sports_pad_demo} alt={'Sports Pad'}  width={`72%`} height={'150'} />
            </span>
            
            <span className="work">
                <label className="projlbl" onClick={() => window.open('https://note-taker-zahid.herokuapp.com/')}>
                    <strong>Note Taker</strong><br />
                    <small>Express.js</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/Note_Taker')}>Git Repo</label>
                </label>
                <img src={note_taker_demo} alt={'Note Taker'}  width={`73%`} height={'150'} />
            </span>
            <span className="work">
                <label className="projlbl" onClick={() => window.open('https://murmuring-headland-20273.herokuapp.com/')}>
                    <strong title="Project 2 - Marketing Revenue Tracker">Revenue Tracker</strong><br />
                    <small>Model View Controller</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/Revenue-Tracker')}>Git Repo</label>
                </label>
                <img src={shop_list} alt={'Marketing Revenue Tracker'}  width={`70%`} height={'150'} />
            </span>
             
            <span className="work">
                <label className="projlbl" onClick={() => window.open('https://degrassi-parliament-00065.herokuapp.com/')}>
                    <strong >Workout Tracker</strong><br />
                    <small>NoSQL - MongoDB</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/workout_tracker')}>Git Repo</label>
                </label>
                <img src={fitness_tracker} alt={'Workout Tracker'}  width={`70%`} height={'150'} />
            </span>
            <span className="work">
                <label className="projlbl" onClick={() => window.open('https://fierce-fjord-72791.herokuapp.com/')}>
                    <strong alt="Online/Offline Budget Trackers">Budget Tracker</strong><br />
                    <small title="Offline Installation">PWA - NoSQL</small><br />
                    <label style={{cursor:'pointer'}} onClick={() => window.open('https://github.com/zahid267/Budget-Tracker')}>Git Repo</label>
                </label>
                <img src={budget_tracker} alt={'Budget Tracker'}  width={`72%`} height={'150'} />
            </span>
                         
                     
      </div>
      


    </div>
  );
}
