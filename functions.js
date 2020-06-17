const mathClass = [
  {
    name: "Mariah",
    age: 25,
    grade: 7.8
  },
  {
    name: "Noah",
    age: 22,
    grade: 8
  },
  {
    name: "Joana",
    age: 26,
    grade: 9.7
  }
]

const englishClass = [
  {
    name: "Robert",
    age: 25,
    grade: 10
  },
  {
    name: "Miltton",
    age: 22,
    grade: 6.5
  },
  {
    name: "Sabrina",
    age: 26,
    grade: 9.5
  }
]

 function gradeAvg(someClass) {
   return (someClass[0].grade + someClass[1].grade + someClass[2].grade) / 3
 }
const mathClassAvgGrade = gradeAvg(mathClass);
const englishClassAvgGrade = gradeAvg(englishClass);
