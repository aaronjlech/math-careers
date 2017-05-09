import { data } from '../../data';

console.error("NOOO")

export const selectedCourse = (state = data.courses, action) => {
   console.log("asdfasdf")
   switch (action.type) {
      case "UPDATE_SELECTED":
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
