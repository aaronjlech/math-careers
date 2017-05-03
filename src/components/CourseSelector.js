import React, { Component } from 'react';
// import { courses, careers } from '../data';

const DropdownMenu = ({courses}) =>{

   return(
      <ul>
         {courses.map(course =>{
            return (
               <li>{}</li>
            )
         })}
      </ul>
   )

}

export default class CourseSelector extends Component{


   onChange = (e)=>{
      e.preventDefault();
      const { value } = this.refs.courseSelector

      const { updateSelected } = this.props;
      updateSelected(value);
   }

   render(){
      const { courses } = this.props;
      return(
         <label htmlFor="course-selector">
            Pick Your Highest Level of Math!
            <select
               onChange={this.onChange}
               ref="courseSelector"
               name="courseSelector" id="course-selector"
               >
               <option value="ALL">Show All Courses & Careers</option>
               {courses.map( course => <option value={course.id} key={course.id}>{course.name}</option>)}
            </select>
         </label>

      )
   }
}
