import React from 'react';
import './App.css';

export default function About() {
  const name = 'Muhammad Zahid';
  return (
    <div className="work">
      <h2>About Me</h2>
                <div>
                    <figure>
                        <img src={'images/zahid_pic.jpg'} alt={name}  width={`200`} height={`200`} />
                    </figure>
                     <p>
                        I have been a Programmer Analyst since 2002. I have worked with different languages, including Pick uniVerse database, PICK BASIC, RedBack (IBM’s U2 WebDE), Java, Javascript, Ajax, Perl, JSP, PCL, Visual Basic, Visual Basic .Net, ASP, VB Script, HTML, CSS and several others (see resume). I have developed business applications using several software languages and have worked with different Web applications. Some of the major types of application are Warehouse Management System, Freight Management System, Distribution Control, Copyright Courseware and Point of Sale (POS) software, e-commerce for university/college bookstore, University/College bookstore software and Mathematics learning tools. I have worked in manufacturing environment for several years as well.
                     </p>
                     <p>I have also developed server-side methods to fetch XML, Json or text data, from affiliated websites, in recent years. I have worked with credit card payment process as well.</p>
                </div>

                <div>
                <h2>Work</h2><br /><br />
                  <h3>Programmer Analyst</h3>
                            <h4>Waterloo Information Systems Ltd., Waterloo, ON</h4>
                            <h5>July 2002 – Present</h5>
                                <br />
                            <ul>
                                <li>Develop web applications utilizing uniVerse database, PICK BASIC, JSP, java, Perl, javascript, jQuary, Ajax, jBoss, Wildfly, Canvas 2d, HTML, HTML5, DHTML, CSS, RedBack, U2 WebDe.</li>
                                <li>Develop custom software using appropriate software language</li>
                                <li>Develop new applications using Pick uniVerse and PICK BASIC</li>
                                <li>Developed web methods to process credit card payment</li>
                                <li>Developed applications to make LWP Requests to get XML, Json data from affiliated websites</li>
                                <li>Created applications to retrieve prices, images and product availability from the affiliated sites</li>
                                <li>Developed JSP code generation software using uniVerse database</li>
                                <li>Maintain and modify existing software to fulfill customer requirements</li>
                                <li>Develop new Web applications interacting with database</li>
                                <li>Maintain the existing Web applications</li>
                                <li>Create new database files and modify the existing ones</li>
                                <li>Test applications for 100% precision</li>
                                <li>Debug and trouble-shoot existing software</li>
                                <li>Experience developing web pages to maintain data in a table format.</li>
                                <li>Experience with resolving cross bowser issues</li>
                                <li>Experience with Macromedia and Interdev</li>
                                <li>Experience with Komodo (Perl editor)</li>
                                <li>Experience developing Mathematics learning tools for up to grade 8</li>
                                <li>Interaction with customers to satisfy needs, including email/telephone support</li>
                                <li>Develop applications to send/receive files to/from others software vendors of our customers to update database</li>
                            </ul>
                </div>

    </div>
  );
}
