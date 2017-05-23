import { data } from '../../data';

console.error("NOOO")

export const selectedCourse = (state = [], action) => {
    console.log(state, action)
   switch (action.type) {
      case "UPDATE_SELECTED":
        if(action.courseId === ""){
            return [];
        }
      let currentCourse = data.courses.filter(course =>{
         return(
            action.courseId === "ALL" || action.courseId  === course.id
         )
      })
         return currentCourse[0]
         break;
      default:
      console.log(state, 'helloo')
      return state;
      break;
   }
}
