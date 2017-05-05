import React, { Component } from 'react';
import CareerCard from '../components/CareerCard';




export default class CareerContainer extends Component{



    render(){
        const { selectedCareers } = this.props;

        return(

            <div className="container">
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