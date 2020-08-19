import React from 'react';
import './testcase.css';

// testcase image
import testarrow from './images/testImage/testcasearrow.png'; 
import search from './images/testImage/search.png';


class Testcase extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {    mystate: [
            this.key0 ={
                key: 1,
                option : "Pass",
                condition: true,
                color: "#4DBD98"
            },
            this.key1={
                key: 1,
                option : "Failed",
                condition: false,
                color: "#EB0E43"
            },
            this.key2={
                key: 2,
                option : "Untest",
                condition: false,
                color: "#F15832"
            },            
            this.key3={
                key: 3,
                option : "Retest",
                condition: false,
                color: "#F15832"
            },
            this.key4={
                key: 4,
                option : "Pass",
                condition: false,
                color: "#4DBD98"
            },
            this.key5={
                key: 5,
                option : "Failed",
                condition: false,
                color: "#EB0E43"
            },
            this.key6={
                key: 6,
                option : "Retest",
                condition: false,
                color: "#F15832"
            },
            this.key7={
                key: 7,
                option : "Pass",
                condition: false,
                color: "#4DBD98"
            }
        ]}
    }
    handleClick = (id) => {   

        this.setState({
            mystate : [
                id.condition = !id.condition
            ]
        })
    }
    passclick = (id) => {
        this.setState({
            mystate : [
                id.condition = !id.condition,
                id.option = "Pass",
                id.color = "#4DBD98"
            ]
        })
    }

    failclick = (id) => {
        this.setState({
            mystate : [
                id.condition = !id.condition,
                id.option = "Failed",
                id.color = "#EB0E43"
            ]
        })
    }

    retest = (id) => {
        this.setState({
            mystate : [
                id.condition = !id.condition,
                id.option = "Retest",
                id.color = "#F15832"
            ]
        })
    }

    untest = (id) => {
        this.setState({
            mystate : [
                id.condition = !id.condition,
                id.option = "Untest",
                id.color = "#F15832"
            ]
        })
    }
    
    render(){

        return (
            <div className="tests">
            <div className="tests-heading">
                <h5>Added Test Case</h5>
            </div>

            <div className="testscroll">
                <div className="test">
                    <div className="test-lines">
                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Make the background image blur
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key0)} style={{backgroundColor:this.key0.color}} className="selectInput">
                                    <h5>{this.key0.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key0.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key0)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key0)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key0)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key0)}>Untest</h5>
                            </div>
                        </div>
                    </div>
        
                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Make the background image blur
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key1)} style={{backgroundColor:this.key1.color}} className="selectInput">
                                    <h5>{this.key1.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key1.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key1)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key1)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key1)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key1)}>Untest</h5>
                            </div>
                        </div>
                    </div>

                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Apply gredient colours on the navigation
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key2)} style={{backgroundColor:this.key2.color}} className="selectInput">
                                    <h5>{this.key2.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key2.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key2)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key2)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key2)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key2)}>Untest</h5>
                            </div>
                        </div>
                    </div>
        
                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Make the background image blur
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key3)} style={{backgroundColor:this.key3.color}} className="selectInput">
                                    <h5>{this.key3.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key3.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key3)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key3)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key3)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key3)}>Untest</h5>
                            </div>
                        </div>
                    </div>

                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Apply gredient colours on the navigation
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key4)} style={{backgroundColor:this.key4.color}} className="selectInput">
                                    <h5>{this.key4.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key4.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key4)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key4)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key4)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key4)}>Untest</h5>
                            </div>
                        </div>
                    </div>
        
                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Make the background image blur
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key5)} style={{backgroundColor:this.key5.color}} className="selectInput">
                                    <h5>{this.key5.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key5.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key5)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key5)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key5)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key5)}>Untest</h5>
                            </div>
                        </div>
                    </div>

                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                            Apply gredient colours on the navigation
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key6)} style={{backgroundColor:this.key6.color}} className="selectInput">
                                    <h5>{this.key6.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key6.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key6)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key6)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key6)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key6)}>Untest</h5>
                            </div>
                        </div>
                    </div>
        
                    <div className="optionflex">
                        <div className="test-line">
                            <h5>
                                Make the background image blur
                            </h5>
                            <div className="option">
                                <div onClick={(id) => this.handleClick(this.key7)} style={{backgroundColor:this.key7.color}} className="selectInput">
                                    <h5>{this.key7.option}</h5>
                                    <img src={testarrow}/>
                                </div>
                            </div>
                        </div>
                        <div className={ !this.key7.condition ? "optionshow" : "optionshow1"}>
                            <div className="optionbox">
                                <div className="optionsearch">
                                    <img alt="" src={search}/>
                                    <input placeholder="Search name" type="search"/>
                                </div>
                                <h5 onClick={(id) => this.passclick(this.key7)}>Pass</h5>
                                <h5 onClick={(id) => this.failclick(this.key7)}>Failed</h5>
                                <h5 onClick={(id) => this.retest(this.key7)}>Retest</h5>
                                <h5 onClick={(id) => this.untest(this.key7)}>Untest</h5>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="buttonmargin">
                        <div className="test-buttons">
                            <button className="newtestbutton">New Test Case</button>
                            <button className="testbutton">Test</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Testcase;