import React, { Component } from 'react';
import CourseSelector from '../components/CourseSelector';
import Thumbnail from '../components/Thumbnail';





export default class Main extends Component{

   render(){
      const { selectedCourse, courses, careers, selectedCareers } = this.props;

      console.log(selectedCourse)
      return(
         <div id="app-container">
            <CourseSelector {...this.props}/>
            <h1>Courses</h1>
            <div className="courses">
               {/* {selectedCourse.map(course => {
                  return( <Thumbnail
                           key={course.id}
                           name={course.name}
                           description={course.description}
                           type={course.type}
                           {...this.props}

                        />
                        )
               })} */}
            </div>
            <h1>Careers</h1>
            <div className="careers">
               {selectedCareers.map(career =>{
                  return( <Thumbnail
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
