import React, { Component } from 'react';
import CourseSelector from '../components/CourseSelector';
import CareerCard from "../components/CareerCard";
// import CourseContainer from './CourseContainer';
// import CareerContainer from './CareerContainer';
// import SideNav from './SideNav';
// import LandingPage from '../components/LandingPage';
export default class Main extends Component {



    render() {
        const { selectedCourse, courses, careers, selectedCareers } = this.props;
        const highSchools = courses.filter(course => course.type === "highschool");
        const colleges = courses.filter(course => course.type === "college");
        const courseLength = selectedCourse.length > 1;
        console.log(selectedCourse)
        return (
            <div id="app-container container">
                <div className="jumbotron">
                    <div className="jumbotron_cover">
                        <div className="header-text text-center">
                            <h1>Math Career Paths</h1>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="To be added..." />
                                <span className="input-group-btn">
                                    <button className="btn search-btn" type="button">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu container text-center">
                    <CourseSelector {...this.props} courseType="highschool"/>


                </div>
                <div className="career_container fluid-container">
                    <div className="row">
                        {careers.map( career =>{
                            let isPath = "";
                            if(selectedCourse.careers !== undefined){
                                if(selectedCourse.careers[career.id]){
                                    console.log(selectedCourse.careers[career.id], 'ahhhttt')
                                    isPath = "selected-career";
                                }else {
                                    isPath = "";
                                }
                            }
                            return <CareerCard
                                    {...this.props}
                                    career={career}
                                    key={career.id}
                                    isPath={isPath}
                                    />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
