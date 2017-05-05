import React, { Component } from 'react';


export default class CourseCard extends Component {

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
            <div className="courses_card col-sm-3">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{type}</p>
            </div>
        );
  }
}
