import React from 'react';
import './sidenav.css';
import logo from './images/sidenav/main_logo.png';
import firstnavimg from './images/sidenav/navimg1.png';
import secondnavimg from './images/sidenav/navimg2.png';
import thirdnavimg from './images/sidenav/navimg3.png';
import sidenavarrow from './images/sidenav/sidenavarrow.png';




function Sidenav (){
    return (
        <div className="sidenav">
                      <div className="logo">
                          <img alt="logo" src={logo}/>
                      </div>
                      <div className="sideimg">
                          <img alt="img" className="sideimgborder" src={firstnavimg}/>
                          <img alt="img" src={secondnavimg}/>
                          <img alt="img" src={thirdnavimg}/>
                      </div>
                      <div className="sidenavthirdsection">
                          <a className="pn" href="#">PN</a>
                          <a className="ji">JI</a>
                          <a className="lg">LG</a>
                          <a className="aw1">AW</a>
                          <a className="aw2">AW</a>
                      </div>
                      <div className="sidenavarrow">
                          <img src={sidenavarrow} alt="arrow"/>
                      </div>
                  </div>
    )
}

export default Sidenav;
