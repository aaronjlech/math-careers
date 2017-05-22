import React, { Component } from 'react';


export default class CareerCard extends Component {



  render() {
    const { name, description, type, id } = this.props.career;
    const { career, courses, opacity } = this.props;
    const coursesNeeded = this.props.courses.filter(course => {
      return courses[0].careers[career.id].includes(course.id)
    })
    let styles = {
      opacity,
      // background: 
      background: `url(${career.image})center center no-repeat`
    }


    return (
      <div
        style={styles}
        className="career_card col-md-6 col-lg-4 col-sm-12 text-center">
        <div className="opacity_card">
          <h5>{name}</h5>
          <div className="course_container ">
            <p className="selected" key={courses[0].id}>{courses[0].name}</p>
            {coursesNeeded.map(course => {
              return (
                <p key={course.id}>{course.name}</p>
              )
            })}
          </div>
        </div>

      </div>

    );
  }
}
