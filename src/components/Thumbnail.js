import React, { Component } from 'react';



export default class Thumbnail extends Component {

   _getRequired = ()=>{
      const { courses, preReq } = this.props
      let requiredCourses = [];
      let finalCourse = courses.filter(course => course.id === preReq)[0]
      requiredCourses.push(finalCourse)
      console.log(finalCourse)
      let finalCoursePreReq = courses.filter(course => finalCourse.preReqs.includes(course.id))
      console.log(finalCoursePreReq)
   }


   render(){
      const { name, description, type } = this.props
      return(
         <div className="container">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{type}</p>
            <button className="btn btn-primary" onClick={this._getRequired}>Show Required Courses</button>
         </div>
      )
   }
}
