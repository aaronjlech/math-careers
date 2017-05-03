export const courses = [
   {
      id: "hsc0",
      name: "Foundations in Algebra",
      description: "",
      type: 'highschool',
      preReqs: [],
      careers: "ALL"
   },
   {
      id: "hsc1",
      type: 'highschool',
      name: "Intermediate Algebra",
      description: "",
      preReqs: ["hsc0"],
      careers: "ALL"
   },
   {
      id: "hsc2",
      name: "Algebra I",
      description: "",
      type: 'highschool',
      preReqs: [],
      careers: "ALL"
   },
   {
      id: "hsc3",
      name:  "Geometry",
      description: "",
      type: 'highschool',
      preReqs: [ "hsc2", "hsc1" ],
      careers: "ALL"
   },
   {
      id: "hsc4",
      name: "Algebra II",
      description: "",
      type: 'highschool',
      preReqs: ["hsc3"],
      careers: "ALL"

   },
   {
      id: "hsc5",
      name: "Precalculus or Algebra III",
      description: "",
      type: 'highschool',
      preReqs: ["hsc4"],
      careers: ["cp0", "cp1", "cp2", "cp3"]

   },
   {
      id: "hsc6",
      name: "Statistics or Other Non-Algebra Math Courses",
      description: "",
      type: 'highschool',
      preReqs: ["hsc4"],
      careers: ["cp5"]
   },
   // END HIGHSCHOOL COURSES
   // BEGIN COLLEGE COURSES
   {
      id: "cc0",
      name: "Precalculus",
      description: "",
      type: 'college',
      preReqs: ["hsc5", "cc1"],
      careers: ["cp1", "cp2", "cp3"]

   },
   {
      id: "cc1",
      name: "College Algebra",
      description: "",
      type: 'college',
      preReqs: ["hsc4", "hsc6"],
      careers: ["cp1", "cp2", "cp3"]

   },
   {
      id: "cc2",
      name: "1st Year College Math Non-Algebra Course (e.g. Statistics)",
      description: "",
      type: 'college',
      preReqs: ["hsc6"]
   },
   {
      id: "cc3",
      name: "Calculus I",
      description: "",
      type: 'college',
      preReqs: ["hsc5"]
   },
   {
      id: "cc4",
      name: "Business Calculus",
      description: "",
      type: 'college',
      preReqs: ["hsc5", "cc1"]
   },
   {
      id: "cc5",
      name: "Additional Advanced STEM Courses",
      description: "",
      type: 'college',
      preReqs: ["cc3"]
   },
   {
      id: "cc6",
      name: "Additional Calculus or Statistics Courses",
      description: "",
      type: 'college',
      preReqs: ["cc4"]
   },
   {
      id: "cc7",
      name: "Additional Math Courses",
      description: "",
      type: 'college',
      preReqs: ["cc1", "cc2"]
   }
   // END COLLEGE COURSES
];
// var collegeMath = [
//    "Precalculus",
//    "College Algebra",
//    "Calculus I",
//    "Additional Advanced STEM Courses",
//    "Additional Math Courses",
//    "Additional Calculus or Statistics Courses",
//    "Business Calculus",
//    "1st Year College Math Non-Algebra Course (e.g. Statistics)"
// ]
export const careers = [
   {
      id: "cp0",
      name: "Non College Stem Careers",
      description: "",
      type: 'career',
      ///coursePaths references all courses that will path to this givin Career.
      coursePaths: ["hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5"]

   },
   {
      id: "cp1",
      name: "STEM Careers (Science Technology, Engineering, Mathematics, & STEM Education)",
      description: "",
      type: 'career',
      coursePaths: {
         college: [ "cc0", "cc3", "cc5" ],
         highSchool: courses.filter((course) => course.type === "highscool")
      },
   },
   {
      id: "cp2",
      name: "Business and Some Health Science Careers",
      description: "",
      type: 'career',
      coursePaths: {
         college: ["cc1", "cc4", "cc6"],
         highSchool: courses.map(function(obj){ return obj.id})
      },
   },
   {
      id: "cp3",
      name: "Business and Some Health Science Careers",
      description: "",
      type: 'career',
      coursePaths: {
         college: ["cc1", "cc7"],
         highSchool: courses.map(function(obj){ return obj.id})
      },
   },
   {
      id: "cp4",
      name: "Humanities & Arts Careers",
      description: "",
      type: 'career',
      coursePaths: {
         college: ["cc2", "cc7"],
         highSchool: ["hs0", "hs1", "hs6"]
      },
   },
   {
      id: "cp5",
      name: "Non-College Non-Stem Careers",
      description: "",
      type: 'career',
      coursePaths: {
         college: [],
         highSchool: ["hsc6"]
      },
   }
];
