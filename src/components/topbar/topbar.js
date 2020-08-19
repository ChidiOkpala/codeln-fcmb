import React from 'react';
import './topbar.css';

// topbar images
import menu from './images/topbar/menu.png';
import fcmb from './images/topbar/fcmb.png';
import search from './images/topbar/search.png';
import bell from './images/topbar/bell.png';
import owner from './images/topbar/owner.png';
import badge from './images/topbar/badge.png';
import user from './images/topbar/pic.png';
import topbararrow from './images/topbar/topbararrow.png';

function Topnav (){
    return (
        <div className="topbar">
                          <div className="menu">    
                              <img alt="" src={menu}/>
                          </div>
                          <div className="fcmb">
                              <img alt="fcmb" src={fcmb}/>
                              <h3>FCMB: Mobile Banking.</h3>
                          </div>
                          <div className="border">
                              <div></div>
                          </div>
                          <div className="search">
                              <img src={search}/>
                              <input type="search" placeholder="search"/>
                          </div>
                          <div className="bell">
                              <img src={bell}/>
                          </div>
                          <div className="owner">
                              <img src={owner}/>
                              <h6>OWNER</h6>
                          </div>
                          <div className="badge">
                              <img src={badge}/>
                          </div>
                          <div className="user">
                              <img src={user}/>
                              <div className="userdetails">
                                  <h5>Mark Dawn</h5>
                                  <h6>Markdawn@natterbase</h6>
                              </div>
                              <img className="topbararrow" src={topbararrow}/>
                          </div>
                      </div>
    )
}

export default Topnav;