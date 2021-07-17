import React from 'react';
import './App.css';
import zahid_pic from '../../images/zahid_pic.jpg';

export default function About() {
  const name = 'Muhammad Zahid';
  return (
    <div className="work">
        <h2>About Me</h2>
               <div> 
                <figure>
                      <img src={zahid_pic} alt={name}  width={`200`} height={`200`} />
                </figure>
                
                     <p>
                        I have been a Programmer Analyst since 2002. I have worked with different languages, including Pick uniVerse database, PICK BASIC, RedBack (IBM’s U2 WebDE), Java, Javascript, Ajax, Perl, JSP, PCL, Visual Basic, Visual Basic .Net, ASP, VB Script, HTML, CSS and several others (see resume). I have developed business applications using several software languages and have worked with different Web applications. Some of the major types of application are Warehouse Management System, Freight Management System, Distribution Control, Copyright Courseware and Point of Sale (POS) software, e-commerce for university/college bookstore, University/College bookstore software and Mathematics learning tools. I have worked in manufacturing environment for several years as well.
                     </p>
                     <p>I have also developed server-side methods to fetch XML, Json or text data, from affiliated websites, in recent years. I have worked with credit card payment process as well.</p>
                </div>

    </div>
  );
}
