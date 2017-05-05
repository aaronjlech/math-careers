import React, { Component } from 'react';
import CourseSelector from '../components/CourseSelector';
import CareerCard from '../components/CareerCard';
import CourseCard from '../components/CourseCard';





export default class Main extends Component{

   render(){
      const { selectedCourse, courses, careers, selectedCareers } = this.props;

      return(
         <div id="app-container">
            <CourseSelector {...this.props}/>
            <h1>Courses</h1>
            <div className="courses row">
               {selectedCourse.map(course => {
                  return( <CourseCard
                           key={course.id}
                           name={course.name}
                           description={course.description}
                           type={course.type}
                           {...this.props}

                        />
                        )
               })}
            </div>
            <h1>Careers</h1>
            <div className="careers row">
               {selectedCareers.map(career =>{
                  return( <CareerCard
                           key={career.id}
                           name={career.name}
                           description={career.description}
                           type={career.type}
                           preReq={career.preReq}
                           {...this.props}
                        />
                     )

               })}
            </div>

         </div>
      )
   }
}
