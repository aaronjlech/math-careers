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
    const { course, updateSelected } = this.props;
    return (
            <div className={`"courses_card col-sm-3 "${course.type}`} onClick={()=> updateSelected(course.id)}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <p>{course.type}</p>
            </div>
        );
  }
}
