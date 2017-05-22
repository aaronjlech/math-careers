import { data } from '../../data';


export const selectedCareers = function(state = data.careers, action)  {
   switch (action.type) {
      case "UPDATE_SELECTED":
      if(action.courseId === "ALL"){
         return data.careers;
      }
      let currentCareers = data.careers.filter(career =>{
         return career.coursePaths.includes(action.courseId)
      })
         return currentCareers
         break;
      default:
      return state;
      break;
   }
}
