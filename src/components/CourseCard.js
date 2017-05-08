import React, { Component } from 'react';
import ToolTip from './ToolTip';

export default class CourseCard extends Component {
  
  state = {
    isHovered: false
  }

  _toggleToolTip = () =>{
    const { isHovered } = this.state;
    if(isHovered) {
      console.log("heello")
        this.setState({isHovered: false})

    } else {
        this.setState({isHovered: true})

    }

  }

  _getRequired = () => {
    const { courses, preReq } = this.props;
    const requiredCourses = [];
    const finalCourse = courses.filter(course => course.id === preReq)[0];
    requiredCourses.push(finalCourse);
    const finalCoursePreReq = courses.filter(course => finalCourse.preReqs.includes(course.id));
  }



  render() {
    const { course, updateSelected } = this.props;
    const { isHovered } = this.state

    return (
            <div className="col-sm-3" 
                onMouseEnter={this._toggleToolTip} 
                onMouseLeave={this._toggleToolTip}>
              <div className={`courses_card ${course.type}`}>
                <h3>{course.name}</h3>
                {isHovered ? <ToolTip description={course.description}/>  : "" }
                <p>{course.type}</p>
                <button className="btn btn-primary" onClick={()=> updateSelected(course.id)}>Select Course</button>
              </div>

            </div>
        );
  }
}
