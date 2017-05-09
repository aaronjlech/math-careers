import React, { Component } from 'react';
import CourseSelector from '../components/CourseSelector';
import CourseContainer from './CourseContainer';
import CareerContainer from './CareerContainer';
import SideNav from './SideNav';
import LandingPage from '../components/LandingPage';
export default class Main extends Component{



   render(){
      const { selectedCourse, courses, careers, selectedCareers } = this.props;
      const highSchools = courses.filter(course => course.type === "highschool");
      const colleges = courses.filter(course => course.type === "college");
      const courseLength = selectedCourse.length > 1;
      return(
         <div id="app-container container">
                        <SideNav {...this.props}/>
           {courseLength ? <LandingPage/> :  <CareerContainer {...this.props}/> }
            


         </div>
      )
   }
}
