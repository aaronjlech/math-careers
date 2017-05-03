import React, { Component } from 'react';
import CourseSelector from '../components/CourseSelector';






export default class Main extends Component{




   render(){
      const { selectedCourse, courses } = this.props;
      let currentCourse = courses.filter(course =>{
         return(
            selectedCourse === "ALL" || selectedCourse === course.id
         )
      })
      console.log(currentCourse)
      return(
         <div id="app-container">
            <CourseSelector {...this.props}/>

         </div>
      )
   }
}
