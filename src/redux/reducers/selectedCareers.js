import { data } from '../../data';


export const selectedCareers = (state = data.careers, action) => {
   console.log(state)
   switch (action.type) {
      case "UPDATE_SELECTED":
      console.log(state, action,  'staattee')
      if(action.courseId === "ALL"){
         return data.careers;
      }
      let currentCareers = data.careers.filter(career =>{
         return career.coursePaths.includes(action.courseId)
      })
         return currentCareers
         break;
      default:
      console.log(state, 'helloo')
      return state;
      break;
   }
}
