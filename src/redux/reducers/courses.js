export const courses = (state = [], action) => {
   switch (action.type) {
      case "UPDATE_CAREERS":
         return action.course;
         break;
      default:
      return state
   }
}
