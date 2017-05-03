import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';
import Main from './Main';

function mapStateToProps(state){

   return{
      careers: state.careers,
      courses: state.courses,
      selectedCourse: state.selectedCourse
   }
}

function mapDispatchToProps(dispatch){

   return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
