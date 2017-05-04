import React, { Component } from 'react';


export default class CareerCard extends Component {


  _getRequired = () => {
    const { courses, preReq } = this.props;
    const requiredCourses = [];
    const finalCourse = courses.filter(course => course.id === preReq)[0];
    requiredCourses.push(finalCourse);
    const finalCoursePreReq = courses.filter(course => finalCourse.preReqs.includes(course.id));
  }


  render() {
    const { name, description, type } = this.props;
    return (
         <div className="career_card col-sm-4">
            <h4>{name.length > 80 ? name.slice(0, 30) + '...' : name}</h4>
            <p>{description}</p>
            <p>{type}</p>
            <button className="btn btn-primary" onClick={this._getRequired}>Show Required Courses</button>
         </div>
      );
  }
}
