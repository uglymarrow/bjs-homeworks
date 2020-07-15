function getResult(a,b,c){
    let coefA = a;
    let coefB = b;
    let coefC = c;
    let x = [];
    let D = coefB ** 2 - 4 * coefA * coefC;

    if (D > 0) {
        x[0] = (-coefB + Math.sqrt(D)) / (2 * coefA);
        x[1] = (-coefB - Math.sqrt(D)) / (2 * coefA);
    } else if (D === 0) {
        x[0] = -coefB / 2 * coefA;
    } 

    return x;
}

function getAverageMark(marks){
    let curMarks = marks;
    let averageMark, num = 0, sum = 0;
    let curMarksLen = curMarks.length;

    if (curMarksLen > 5) {
        curMarksLen = 5;
    }

    if (curMarksLen === 0) {
        return averageMark = 0;
    } else {
        for (let i = 0; i < curMarksLen; i ++) {
            num ++;
            sum += curMarks[i];
        }

        return averageMark = sum / num;
    }
}

function askDrink(name,dateOfBirthday){
    let curName = name;
    let curDateOfBirthday = dateOfBirthday;
    let curDate = new Date;
    let age = (curDate - curDateOfBirthday) / (1000 * 3600 * 24 * 365);
    return result = (age >= 18) ? `Не желаете ли олд-фэшн, ${curName}?` : `Сожалею, ${curName}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
} 