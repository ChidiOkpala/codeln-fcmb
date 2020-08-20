import React from 'react';
import './navline.css';

import calender from './images/calender.png';

class Navline extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="navigationline">
                <div className="nav-line">
                    <div className="nav-line-left">
                        <a>Overview</a>
                        <a>Teams</a>
                        <a className="active">{this.props.active}</a>
                        <a>Files</a>
                        <a>Progress</a>
                    </div>
                    <div className="nav-line-right">
                        <img alt="calender" src={calender}/>
                        <h5>Project Deadline : 10-june-2020</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navline;