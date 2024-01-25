function calculateGrade() {
    let userMarks = document.getElementById('marks').value;
    let  marks = parseFloat(userMarks);
     if (isNaN(marks)) {
    console.log('Invalid input. Please enter a valid number');
    return;
    }
};
    
    let grade ;
    
    if (marks >79) {
    grade ='A';
    }else if (marks >= 60 && marks <=79) {
    grade = 'B';
    }else if (marks>=50 && marks <=59) {
    grade = 'C' ;
    } else if (marks >=40 && marks <=49) {
    grade ='D';
    } else {
    grade = 'E';
    }

    alert(`For ${marks} marks, the grade is :${grade}`);
