import React, { Component } from 'react';
import CourseCard from '../components/CourseCard';





export default class CourseContainer extends Component{

    render(){
      const { selectedCourse, courses, careers, selectedCareers, updateSelected } = this.props;
      const highSchools = courses.filter(course => course.type === "highschool");
      const colleges = courses.filter(course => course.type === "college");

        return(
            <div className="courses text-center">
                  <div className="row courses_highschools">
                        <h1>High School Courses</h1>
                        {highSchools.map(course => {
                              return( <CourseCard
                                          key={course.id}
                                          course={course}
                                          {...this.props}
                              />
                              )
                        })}
                  </div>
                  <div className="row courses_colleges">
                        <h1>College Courses</h1>
                        {colleges.map(course => {
                              return( <CourseCard
                                          key={course.id}
                                          course={course}
                                          {...this.props}
                                    />
                              )
                        })}
                  </div>
            </div>
        )
    }
}