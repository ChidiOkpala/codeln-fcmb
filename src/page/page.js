import React from 'react';
import './page.css';

import Sidenav from '../components/sidenav/sidenav';
import Topnav from '../components/topbar/topbar';
import Navline from '../components/navline/navline'
import Module from '../components/modules/module';
import Overview from '../components/overview/overview';
import Testcase from '../components/testcase/testcase';


class Page extends React.Component {
    constructor(props){
        super(props); 
    }
    
    render(){
        // if(this.state.option === "Pass"){
        //     backgroundColor: "red"
        // }
        return (
            <div className="app">
                <div className="main-flex">
                    <Sidenav />
                    <div className="mainwidth">
                        <Topnav />      
                        <Navline />
      
                        <div className="modules-test-overview">
                            <Module />
      
                            <Testcase />
        
                            <Overview />
                        </div>
                    </div>
                </div>
            </div>
          );
    }
    
  }
  
  export default Page;