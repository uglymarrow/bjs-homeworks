String.prototype.isPalindrome = function() {
    const inputString = this.replace(/\s+/g, '').toLowerCase();

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] != inputString[inputString.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function getAverageMark(marks) {
    let sumOfMarks = 0;

    for (mark of marks) {
        sumOfMarks += mark;
    }
    const averageMark = (marks.length == 0) ? 0 : Math.round(sumOfMarks / marks.length);

    return averageMark; 
}

function checkBirthday(birthday) {
    const now = + Date.now(); 
    const unixStampBirth = + new Date(birthday);
    const age =  (now - unixStampBirth) / (1000 * 3600 * 24 * 30 * 12);
    const verdict = (age >= 18) ? true : false;
    return verdict;
}
