import React from 'react';
import './module.css';

import zeronavimg from './navimg0.png';
import Sidenav from '../components/sidenav/sidenav';
import Topnav from '../components/topbar/topbar';
import Navline from '../components/navline/navline'
import Modmodule from '../components/modmodule/module';
import Spacemodule from '../components/spacemodule/module';



class Page extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            active : "Module",
            zeroimage : zeronavimg
        }
    }
    
    render(){
        const Todo= {
            todo: "Todo"
        }

        const Progress= {
            progress: "In Progress"
        }

        const Review= {
            review: "In Review"
        }

        const Done= {
            done: "Done"
        }

        const spacemargin = {
            marginRight: "8%"
        }
        // if(this.state.option === "Pass"){
        //     backgroundColor: "red"
        // }
        return (
            <div className="app">
                <div className="main-flex">
                    <Sidenav zeroimage={this.state.zeroimage}/>
                    <div className="main-width">
                        <Topnav />      
                        <Navline active={this.state.active}/>
      
                        <div className="modmodules-test-overview">
                            <Modmodule />

                            <Spacemodule activity={Todo.todo}/>

                            <Spacemodule activity={Progress.progress}/>

                            <Spacemodule activity={Review.review}/>

                            <Spacemodule activity={Done.done} spacemodulestyle={spacemargin}/>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
    
  }
  
  export default Page;