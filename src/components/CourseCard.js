import React, { Component } from 'react';
import ToolTip from './ToolTip';

export default class CourseCard extends Component {
  
  state = {
    isClicked: false
  }

  _toggleToolTip = () =>{
    const { isClicked } = this.state;
    if(isClicked) {
      console.log("heello")
        this.setState({isClicked: false})

    } else {
        this.setState({isClicked: true})

    }

  }

  _getRequired = () => {
    const { courses, preReq } = this.props;
    const requiredCourses = [];
    const finalCourse = courses.filter(course => course.id === preReq)[0];
    requiredCourses.push(finalCourse);
    const finalcodeCoursePreReq = courses.filter(course => finalCourse.preReqs.includes(course.id));
  }


  render() {
    const { course, updateSelected } = this.props;
    const { isClicked } = this.state

    return (
            <div className="col-sm-4">
              <div className={`courses_card ${course.type}`}>
                <h3>{course.name}
                  <i className="icon-info-circled" 
                        onMouseEnter={this._toggleToolTip}
                        onMouseLeave={this._toggleToolTip}>
                        {isClicked ? <ToolTip description={course.description}/>  : "" }
                  </i>
                </h3>
                 <button className="btn btn-primary" onClick={()=> updateSelected(course.id)}>Select Course</button>
              </div>

            </div>
        );
  }
}
