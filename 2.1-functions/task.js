function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let roots = [];

    if (D > 0) {
        roots[0] = (-b + D ** 0.5) / (2 * a);
        roots[1] = (-b - D ** 0.5) / (2 * a);
    } else if (D == 0) {
        roots[0] = -b / (2 * a);
    }

    return {
        D,
        roots
    };
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log("Уравнение не имеет вещественных корней");
    }
}

function getAverageMark(marks) {
    let num = 0, sum = 0;

    for (let i = 0; i < marks.length; i ++) {
        num ++;
        sum += marks[i];
    }
    return (num == 0) ? 0 : sum / num;
}

function getAverageScore(data) {
    let result = new Object();
    let numOfSubj = 0, sumOfAverMark = 0;

    for (let subject in data) {
        result[subject] = getAverageMark(data[subject]);
        console.log(data[subject]);
        numOfSubj ++;
        sumOfAverMark += result[subject];
    }
    result.average = (numOfSubj == 0) ? 0 : sumOfAverMark / numOfSubj;

    return result;
}

function getPersonData(secretData) {
    let bandit = new Object();

    bandit.firstName = getDecodedValue(secretData.aaa);
    bandit.lastName = getDecodedValue(secretData.bbb);

    return bandit;
}

function getDecodedValue(secret) {
    return (secret == "0") ? "Родриго" : "Эмильо";
}
