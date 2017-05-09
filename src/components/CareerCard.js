import React, { Component } from 'react';


export default class CareerCard extends Component {

  state = {
    showModal: false
  }
  // _getRequired = () => {
  //   const { courses, preReq } = this.props;
  //   const requiredCourses = [];
  //   const finalCourse = courses.filter(course => course.id === preReq)[0];
  //   requiredCourses.push(finalCourse);
  //   const finalCoursePreReq = courses.filter(course => finalCourse.preReqs.includes(course.id));
  // }
    _renderButton = (coursesRequired) => {

      if(coursesRequired.length === 0){
        return (
          <span> No Other courses required! </span>
        )
      }else{
        return(
          <button className="btn btn-primary" onClick={this._showModal}>Show Required Courses</button>
        )
      }
    }
    _showModal = () =>{
      if(this.state.showModal){
        this.setState({showModal: false})
      }else {
         this.setState({showModal: true})
      }
    }
  _renderModal = (courses) => {
    const { career, selectedCourse } = this.props;
    return(
      <div className="modal" onClick={this._showModal}>
      <div className="modal-content">
              <span>Your course Path from {selectedCourse.name} to {career.name} </span>
        {courses.map( course => {
          return(
            <h4 key={course.id}>{course.name}</h4>
          )
        })}
      </div>

      </div>
    )

  }

  render() {
    const { name, description, type, id } = this.props.career;
    const { career } = this.props;
    const coursesNeeded = this.props.courses.filter(course =>{
       return this.props.selectedCourse.careers[career.id].includes(course.id)
    })


    return (
         <div className="career_card col-sm-4">
         <div className="thumbnail">
                     <h4>{name.length > 80 ? name.slice(0, 30) + '...' : name}</h4>
            {this._renderButton(coursesNeeded)}
            {this.state.showModal ? this._renderModal(coursesNeeded) : null}

         </div>
         </div>
      );
  }
}
