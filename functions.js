const mathClass = [
  {
    name: "Mariah",
    age: 25,
    grade: 7.8
  },
  {
    name: "Noah",
    age: 22,
    grade: 4.5
  },
  {
    name: "Joana",
    age: 26,
    grade: 9.7
  },
  {
    name: "Yvan",
    age: 20,
    grade: 6
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
  },
  {
    name: "Judith",
    age: 15,
    grade: 7.7
  }
]

function gradeAvg(someClass) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < someClass.length; i++) {
    sum += someClass[i].grade;
  }
  average = sum / someClass.length;
  return average
};

const mathClassGradeAvg = gradeAvg(mathClass);
const englishClassGradeAvg = gradeAvg(englishClass);

function sendMessage(avg, someClass) {
  if (avg >= 8) {
    console.log(`The grade average was higher than 8! Congrats ${someClass}`);
  } else {
    console.log(`The grade average was lower than 8! Study more ${someClass}`);
  }
}

/*Booleans*/
function checkIfReproved(student) {
  student.reproved = false;
  if (student.grade < 6) {
    student.reproved = true;
  }
};

function sendReprovedMessage(student) {
  if (student.reproved) {
    console.log(`${student.name} You are reproved!`);
  }
};

function reprovedStudent(students) {
  for (let student of students) {
    checkIfReproved(student);
    sendReprovedMessage(student);
  }
};

sendMessage(mathClassGradeAvg, "Math class");
sendMessage(englishClassGradeAvg, "English class");
reprovedStudent(englishClass);
reprovedStudent(mathClass);
