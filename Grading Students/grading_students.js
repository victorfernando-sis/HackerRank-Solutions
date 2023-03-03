// https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem

function gradingStudents(grades) {

    const findNextMultOf5 = (num) => {
        return num % 5 == 0 ? num : findNextMultOf5(num + 1)
    }

    return grades.map(grade => {
        if (grade < 38) return grade
        return (findNextMultOf5(grade) - grade) < 3 ? 
        findNextMultOf5(grade) : 
        grade
    })
}