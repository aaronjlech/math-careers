import React, { Component } from 'react';
import CareerCard from '../components/CareerCard';




export default class CareerContainer extends Component{



    render(){
        const { selectedCareers, selectedCourse } = this.props;
            console.log(selectedCourse)
        return(

            <div className="container right_container">
            <div className="current-course text-center">
                <label htmlFor="current_title">
                   Selected Course:
                    <h3 className="current_title">{selectedCourse.name}</h3>

                </label>
            </div>
                <div className="careers row text-center">
                    <h1>Available Careers</h1>
                    {selectedCareers.map(career =>{
                        return( <CareerCard
                                key={career.id}
                                career={career}
                                {...this.props}
                            />
                        )

               })}
            </div>
            </div>

            
        )
    }
}