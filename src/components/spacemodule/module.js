import React from 'react';
import './module.css';

// module images
import moduleclock from './images/moduleimages/moduleclock.png';
import modulepic1 from './images/moduleimages/modulepic1.png'
import modulepic2 from './images/moduleimages/modulepic2.png'
import modulepic3 from './images/moduleimages/modulepic3.png'
import modulepic4 from './images/moduleimages/modulepic4.png'


class Spacemodule extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div className="spacemodules" style={this.props.spacemodulestyle}>
                <div className="spacemodules-heading">
                    <h5>{this.props.activity}</h5>
                    <h3>...</h3>
                </div>
                <div className="spacemodulescroll">
                    <button className="spacemodulebutton">+</button>
                    <div className="spacemodule">

                    </div>
                </div>
            </div>
        )
    }
}

export default Spacemodule;