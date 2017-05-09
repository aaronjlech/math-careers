import React, { Component } from 'react';



class MenuItem extends Component{

    _handleSelect = ()=> {
       const { course, updateSelected } = this.props;
       updateSelected(course.id)
    }

    render(){
        const { course, selectedCourse } = this.props;
        let style = () => course.id === selectedCourse.id ? "menu_item selected" : "menu_item"
     
        console.log(this.props)
        return(
            <li className={style()} onClick={this._handleSelect}>{course.name}</li>
        )
    }
}


export default class SideNav extends Component{
    

    render(){
        const { courses } = this.props;
        const hsCourses = courses.filter(course => course.type === "highschool");
        const cgCourses = courses.filter( course => course.type === "college");
        return(
            <aside id="side-menu" className="navigation col-sm-3">
                <h3 className="text-center">Select A Course!</h3>              
                <ul className="menu highschool_menu">
                    <li className="menu_title" key="0">High School</li>
                    {hsCourses.map( course => {
                        return <MenuItem
                                    key={course.id}
                                    course={course}
                                    {...this.props}
                                />
                    })}
                </ul>
                <ul className="menu college_menu">
                    <li className="menu_title" key="1">College</li>
                    {cgCourses.map( course => {
                        return <MenuItem
                                    key={course.id}
                                    course={course}
                                    {...this.props}
                                />
                    })}
                </ul>
            
            </aside>
        )
    }
}