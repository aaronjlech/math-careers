


export const selectedCourse = (state = {}, action) => {
   console.log(state)
   switch (action.type) {
      case "UPDATE_SELECTED":
         return action.courseId;
         break;
      default:
      console.log(state, 'helloo')
      return state;
      break;
   }
}
