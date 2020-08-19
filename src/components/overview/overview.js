import React from 'react';
import './overview.css';

import overviewimage from './images/overviewimage/overviewimage.png';

function Overview (){
    return (
        <div className="overviews">
            <div className="overviews-heading">    
                <h5>Quick Overview</h5>
            </div>
            <div className="overview">
                <div className="overviewboxflex first">
                    <div className="overviewbox">
                        <div className="overviewboxtop">
                            <div className="overviewimage">
                                <img src={overviewimage} alt=""/>
                            </div>
                            <h5>20</h5>
                        </div>
                        <div className="overviewboxbottom">
                            <h5>Total Modules</h5>
                        </div>
                    </div>

                    <div className="overviewbox improvement">
                        <div className="overviewboxtop">
                            <div className="overviewimage">
                                <img src={overviewimage} alt=""/>
                            </div>
                            <h5>20</h5>
                        </div>
                        <div className="overviewboxbottom">
                            <h5>Improvement</h5>
                        </div>
                    </div>
                </div>
                <div className="overviewboxflex">
                    <div className="overviewbox modulestest">
                        <div className="overviewboxtop">
                            <div className="overviewimage">
                                <img src={overviewimage} alt=""/>
                            </div>
                            <h5>14</h5>
                        </div>
                        <div className="overviewboxbottom totaltest">
                            <h5>Total <br/>Modules Test</h5>
                        </div>
                    </div>

                    <div className="overviewbox totalfailed">
                        <div className="overviewboxtop">
                            <div className="overviewimage">
                                <img src={overviewimage} alt=""/>
                            </div>
                            <h5>20</h5>
                        </div>
                        <div className="overviewboxbottom">
                            <h5>Total Failed</h5>
                        </div>
                    </div>
                </div>
                <div className="overviewboxflex">
                    <div className="overviewbox totalpassed">
                        <div className="overviewboxtop">
                            <div className="overviewimage">
                                <img src={overviewimage} alt=""/>
                            </div>
                            <h5>20</h5>
                        </div>
                        <div className="overviewboxbottom">
                            <h5>Total Passed</h5>
                        </div>
                    </div>

                    <div className="overviewbox totaluntested">
                        <div className="overviewboxtop">
                            <div className="overviewimage">
                                <img src={overviewimage} alt=""/>
                            </div>
                            <h5>20</h5>
                        </div>
                        <div className="overviewboxbottom">
                            <h5>Total Untested</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;