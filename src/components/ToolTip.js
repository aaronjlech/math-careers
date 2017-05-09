import React, { Component } from 'react';





export default class ToolTip extends Component{

    render(){
        console.log("hee")
        return(
            <div className="tool-tip">
            <span>Course Description:</span>
                <span>{this.props.description}</span>
            </div>
        )
    } 
};
 