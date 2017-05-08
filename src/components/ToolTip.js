import React, { Component } from 'react';





export default class ToolTip extends Component{

    render(){
        console.log("hee")
        return(
            <div className="tool-tip">
            asdfadf
                <span>{this.props.description}</span>
            </div>
        )
    } 
};
 