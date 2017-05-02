import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Main_Router } from './router.js';


export default class App extends Component{

   render(){
      return(
         <div className="HEyy">
            <h1>Heyy</h1>
         </div>
      )
   }
}

ReactDOM.render(<App/>, document.querySelector("#app-container"));
