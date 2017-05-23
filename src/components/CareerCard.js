import React, { Component } from 'react';


export default class CareerCard extends Component {

  _renderSelected(){
    const { selectedCourse, career } = this.props;
    if(!selectedCourse.name || selectedCourse.careers[career.id] === undefined){
      console.log(selectedCourse.careers, 'this one')
      return null;
    }else{
      return (
        <p key={selectedCourse.id} className="selected-course">{selectedCourse.name}</p>
      )
    }
  }

  render() {
    console.log(this.props)
    const { name, description, type, id } = this.props.career;
    const { career, courses, opacity, selectedCourse } = this.props;
    const coursesNeeded = this.props.courses.filter(course => {
      if(!selectedCourse.careers || selectedCourse.careers[career.id] === undefined){
        return courses[0].careers[career.id].includes(course.id);
      }
      return selectedCourse.careers[career.id].includes(course.id);
    })
    let styles = {
      opacity,
      background: `url(${career.image})center center no-repeat`
    }


    return (
      <div
        style={styles}
        className={`career_card col-md-6 col-lg-4 col-sm-12 text-center ${this.props.isPath}`}>
        <div className="opacity_card">
          <h5>{name}</h5>
          <div className="course_container ">
            {this._renderSelected()}
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
