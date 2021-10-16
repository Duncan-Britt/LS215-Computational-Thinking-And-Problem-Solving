let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData).sort((a, b) => a.average < b.average? -1 : 0),
  };
}

function letterGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getStudentScore(scoreObj) {
  const examTotal = scoreObj.exams.reduce((acc, score) => acc + score);
  const examAverage = examTotal / scoreObj.exams.length;
  const exerciseScore = scoreObj.exercises.reduce((acc, score) => acc + score);
  const overallScore = Math.round(examAverage * .65 + exerciseScore * .35);
  return `${overallScore} (${letterGrade(overallScore)})`;
}

function getExamSummary(examData) {
  examData = transpose(examData);

  return examData.map(studentScores => {
    const total = studentScores.reduce((acc, score) => acc + score);
    const average = total / studentScores.length;

    return {
      average: Math.round(average * 10) / 10,
      minimum: Math.min(...studentScores),
      maximum: Math.max(...studentScores),
    }
  });
}

function transpose(array2D) {
  result = [];

  array2D.forEach((studentScores, studentIdx) => {
    studentScores.forEach((score, examIdx) => {
      result[examIdx] = result[examIdx] || [];
      result[examIdx].push(score);
    });
  });


  return result;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
let a = {
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
