export const data = {
   courses: [
      {
         id: "hsc0",
         name: "Foundations in Algebra",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'highschool',
         preReqs: [],
         preReqFor: [ "cc0", "cc1", "cc2", "cc3", "cc4", "cc5", "cc6", "cc7", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5", "hsc6" ],
         careers: {

             cp0: ["hsc1", "hsc3", "hsc4", "hsc5"],
             cp1: ["hsc1", "hsc3", "hsc4", "hsc5", "cc3", "cc5"],
             cp2: ["hsc1", "hsc3", "hsc4", "hsc5", "cc4", "cc6"],
             cp3: ["hsc1", "hsc3", "hsc4", "cc1", "cc7"],
             cp4: ["hsc1", "hsc3", "hsc4", "hsc6", "cc2", "cc7"],
             cp5: ["hsc1", "hsc3", "hsc4", "hsc6"],
         }
      },
      {
         
         id: "hsc1",
         type: 'highschool',
         name: "Intermediate Algebra",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         preReqs: ["hsc0"],
         preReqFor: [ "cc0", "cc1", "cc2", "cc3", "cc4", "cc5", "cc6", "cc7","hsc2", "hsc3", "hsc4", "hsc5", "hsc6" ],
         careers: {
             cp0: ["hsc3", "hsc4", "hsc5"],
             cp1: ["hsc3", "hsc4", "hsc5", "cc3", "cc5"],
             cp2: ["hsc3", "hsc4", "hsc5", "cc4", "cc6"],
             cp3: ["hsc3", "hsc4", "cc1", "cc7"],
             cp4: ["hsc3", "hsc4", "hsc6", "cc2", "cc7"],
             cp5: ["hsc3", "hsc4", "hsc6"],
         }
      },
      {
         id: "hsc2",
         name: "Algebra I",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'highschool',
         preReqs: [],
         preReqFor: [ "cc0", "cc1", "cc2", "cc3", "cc4", "cc5", "cc6", "cc7", "hsc3", "hsc4", "hsc5", "hsc6" ],
         careers: {
             cp0: ["hsc3", "hsc4", "hsc5"],
             cp1: ["hsc3", "hsc4", "hsc5", "cc3", "cc5"],
             cp2: ["hsc3", "hsc4", "hsc5", "cc4", "cc6"],
             cp3: ["hsc3", "hsc4", "cc1", "cc7"],
             cp4: ["hsc3", "hsc4", "hsc6", "cc2", "cc7"],
             cp5: ["hsc3", "hsc4", "hsc6"],
         }
      },
      {
         id: "hsc3",
         name:  "Geometry",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'highschool',
         preReqs: [ "hsc2", "hsc1" ],
         careers: {
             cp0: ["hsc4", "hsc5"],
             cp1: ["hsc4", "hsc5", "cc3", "cc5"],
             cp2: ["hsc4", "hsc5", "cc4", "cc6"],
             cp3: ["hsc4", "cc1", "cc7"],
             cp4: ["hsc4", "hsc6", "cc2", "cc7"],
             cp5: ["hsc4", "hsc6"],
         }
      },
      {
         id: "hsc4",
         name: "Algebra II",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'highschool',
         preReqs: ["hsc3"],
         careers: {
             cp0: ["hsc5"],
             cp1: ["hsc5", "cc3", "cc5"],
             cp2: ["cc4", "cc6"],
             cp3: ["cc1", "cc7"],
             cp4: ["hsc6", "cc2", "cc7"],
             cp5: ["hsc6"],
         }
      },
      {
         id: "hsc5",
         name: "Precalculus or Algebra III",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'highschool',
         preReqs: ["hsc4"],
         careers: {
             cp0: [],
             cp1: ["cc3", "cc5"],
             cp2: ["cc4", "cc6"],
             cp3: ["cc0", "cc1", "cc7"]
         }
      },
      {
         id: "hsc6",
         name: "Statistics or Other Non-Algebra Math Courses",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'highschool',
         preReqs: ["hsc4"],
         careers: {
             cp0: [],
             cp1: ["cc3", "cc5"],
             cp2: ["cc4", "cc6"],
             cp3: ["cc0", "cc1", "cc7"]
         }
      },
      // END HIGHSCHOOL COURSES
      // BEGIN COLLEGE COURSES
      {
         id: "cc0",
         name: "Precalculus",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["hsc5", "cc1"],
         careers: {
             cp1: ["cc3", "cc5"],
             cp2: ["cc1", "cc4", "cc6"],
             cp3: ["cc1", "cc7"]
         }

      },
      {
         id: "cc1",
         name: "College Algebra",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["hsc4", "hsc6", "cc0"],
         careers: {
             cp1: ["cc0", "cc3", "cc5"],
             cp2: ["cc4", "cc6"],
             cp3: ["cc7"]
         }

      },
      {
         id: "cc2",
         name: "1st Year College Math Non-Algebra Course (e.g. Statistics)",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["hsc6"],
         careers: {
             cp4: ["cc7"]
         }
      },
      {
         id: "cc3",
         name: "Calculus I",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["hsc5", "cc0"],
         careers: {
             cp1: ["cc5"]
         }
      },
      {
         id: "cc4",
         name: "Business Calculus",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["hsc5", "cc1"],
         careers: {
             cp2: ["cc6"]
         }

      },
      {
         id: "cc5",
         name: "Additional Advanced STEM Courses",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["cc3"],
         careers: {
             cp1: []
         }
      },
      {
         id: "cc6",
         name: "Additional Calculus or Statistics Courses",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["cc4"],
         careers: {
             cp2: []
         }

      },
      {
         id: "cc7",
         name: "Additional Math Courses",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'college',
         preReqs: ["cc1", "cc2"],
         careers: {
             cp3: [],
             cp4: []
         }

      }
   ],
   careers:[
      {
         id: "cp0",
         name: "Non College Stem Careers",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'career',
         ///coursePaths references all courses that will path to this givin Career.
         coursePaths: ["hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5"],
         preReq: "hsc5",
         image: "./public/images/stem_non_college.jpeg"


      },
      {
         id: "cp1",
         name: "STEM Careers (Science Technology, Engineering, Mathematics, & STEM Education)",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'career',
         coursePaths: [ "cc0", "cc1", "cc3", "cc5", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5" ],
         preReq: "cc5",
         image: "./public/images/stem_career.jpeg"
      },
      {
         id: "cp2",
         name: "Business and Some Health Science Careers",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'career',
         coursePaths: [ "cc0", "cc1", "cc4", "cc6", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5", "hsc6" ],
         preReq: "cc6",
         image: "./public/images/business_career.jpeg"


      },
      {
         id: "cp3",
         name: "Non STEM Education Careers",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'career',
         coursePaths: [ "cc0", "cc1", "cc7", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5", "hsc6" ],
         preReq: "cc7",
         image: "./public/images/education_career.jpeg"


      },
      {
         id: "cp4",
         name: "Humanities & Arts Careers",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'career',
         coursePaths: [ "cc2", "cc7", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc6" ],
         preReq: "cc7",
         image: "./public/images/arts_career.jpeg"

      },
      {
         id: "cp5",
         name: "Non-College Non-Stem Careers",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         type: 'career',
         coursePaths: [ "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc6" ],
         preReq: "hsc6",
         image: "./public/images/non_stem_non_college.jpeg"


      }
   ]
}
   // END COLLEGE COURSES

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
// export const careers = [
//    {
//       id: "cp0",
//       name: "Non College Stem Careers",
//       description: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt maiores eius a labore atque esse quod, accusantium pariatur. Recusandae laborum reprehenderit ad odit distinctio quia eaque quae maiores voluptates.",
//       type: 'career',
//       ///coursePaths references all courses that will path to this givin Career.
//       coursePaths: ["hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5"],
//       preReq: "hsc5"
//
//    },
//    {
//       id: "cp1",
//       name: "STEM Careers (Science Technology, Engineering, Mathematics, & STEM Education)",
//       description: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt maiores eius a labore atque esse quod, accusantium pariatur. Recusandae laborum reprehenderit ad odit distinctio quia eaque quae maiores voluptates.",
//       type: 'career',
//       coursePaths: [ "cc0", "cc1", "cc3", "cc5", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5" ],
//       preReq: "cc5"
//    },
//    {
//       id: "cp2",
//       name: "Business and Some Health Science Careers",
//       description: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt maiores eius a labore atque esse quod, accusantium pariatur. Recusandae laborum reprehenderit ad odit distinctio quia eaque quae maiores voluptates.",
//       type: 'career',
//       coursePaths: [ "cc0", "cc1", "cc4", "cc6", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5", "hsc6" ],
//       preReq: "cc6"
//
//    },
//    {
//       id: "cp3",
//       name: "Business and Some Health Science Careers",
//       description: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt maiores eius a labore atque esse quod, accusantium pariatur. Recusandae laborum reprehenderit ad odit distinctio quia eaque quae maiores voluptates.",
//       type: 'career',
//       coursePaths: [ "cc0", "cc1", "cc7", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc5", "hsc6" ],
//       preReq: "cc7"
//
//    },
//    {
//       id: "cp4",
//       name: "Humanities & Arts Careers",
//       description: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt maiores eius a labore atque esse quod, accusantium pariatur. Recusandae laborum reprehenderit ad odit distinctio quia eaque quae maiores voluptates.",
//       type: 'career',
//       coursePaths: [ "cc2", "cc7", "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc6" ],
//       preReq: "cc7"
//    },
//    {
//       id: "cp5",
//       name: "Non-College Non-Stem Careers",
//       description: "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi incidunt maiores eius a labore atque esse quod, accusantium pariatur. Recusandae laborum reprehenderit ad odit distinctio quia eaque quae maiores voluptates.",
//       type: 'career',
//       coursePaths: [ "hsc0", "hsc1", "hsc2", "hsc3", "hsc4", "hsc6" ],
//       preReq: "hsc6"
//
//    }
// ];
