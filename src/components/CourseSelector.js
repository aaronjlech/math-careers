import React, { Component } from 'react';
// import { courses, careers } from '../data';


class DropdownMenu extends Component{


   render(){
       const { courses } = this.props;
      return(
          <ul className="menu">
            {courses.map(course => {
                <li onClick={this._handleClick} key={course.id}>{course.name}</li>
            })}
          </ul>

      )
   }
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
          <div className="input-group selector_container">
                      <select
               onChange={this.onChange}
               ref="courseSelector"
               name="courseSelector" className="course-selector"
               >
               {courses.map( course => <option value={course.id} key={course.id}>{course.name}</option>)}
            </select>
                                          <span className="input-group-btn">
                                    <button className="btn selector_button" type="button">
                                        search
                                    </button>
                                </span>
          </div>



      )
   }
}
