function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
        
         if(hasPassingGrade(studentScore))
         {
  return "Class average: "+getAverage(totalScores)+". Your grade: "+getGrade(studentScore)+". You passed the course."
         }
         else
         {
            return "Class average: "+getAverage(totalScores)+". Your grade: "+getGrade(studentScore)+". You failed the course.";

         }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));


// 2nd Method


function getAverage(scores) {
    if (scores.length === 0) return 0;
    return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
  }
  
  function getGrade(score) {
    if (score >= 98) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(classScores, studentScore) {
    const classAverage = getAverage(classScores);
    const grade = getGrade(studentScore);
    const message = hasPassingGrade(studentScore) 
      ? `You passed the course.` 
      : `You failed the course.`;
  
    return `Class average: ${classAverage}. 
    Your grade: ${grade}. 
    ${message}`;
  }
  
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  
