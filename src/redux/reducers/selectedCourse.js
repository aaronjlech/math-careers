import { data } from '../../data';



export const selectedCourse = (state = data.courses, action) => {
   console.log(state)
   switch (action.type) {
      case "UPDATE_SELECTED":
      let currentCourse = data.courses.filter(course =>{
         return(
            action.courseId === "ALL" || action.courseId  === course.id
         )
      })
         return currentCourse
         break;
      default:
      console.log(state, 'helloo')
      return state;
      break;
   }
}
