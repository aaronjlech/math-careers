import React, { Component } from 'react';
import CourseSelector from '../components/CourseSelector';
import CourseContainer from './CourseContainer';
import CareerContainer from './CareerContainer';


export default class Main extends Component{



   render(){
      const { selectedCourse, courses, careers, selectedCareers } = this.props;
      const highSchools = courses.filter(course => course.type === "highschool");
      const colleges = courses.filter(course => course.type === "college");

      return(
         <div id="app-container">
            <h1>Select A Course!</h1>
            <CourseContainer {...this.props}/>
            <h1>Careers</h1>
            <CareerContainer {...this.props}/>

         </div>
      )
   }
}
