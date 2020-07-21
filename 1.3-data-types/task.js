function calculateTotalMortgage(percent, contribution, amount, date) {
    let curPercent;
    let curContribition; 
    let curAmount;
    let endDate = date;
    let totalAmount;

    //проверка корректности ввода
    if (isNumber(percent)) {
        curPercent = Number(percent);
    } else {
        console.log(`Параметр percent содержит неправильное значение ${String(percent)}`);
    }

    if (isNumber(contribution)) {
        curContribition = Number(contribution);
    } else {
        console.log(`Параметр contribution содержит неправильное значение ${String(contribution)}`);
    }

    if (isNumber(amount)) {
        curAmount = Number(amount);
    } else {
        console.log(`Параметр amount содержит неправильное значение ${String(amount)}`);
    }
    //конец проверки корректности введенных данных

    if (isNumber(curPercent) && isNumber(curContribition) && isNumber(curAmount)) {
        let creditBody = (amount - contribution);
        let curDate = new Date;
        let months = (endDate - curDate) / (1000 * 3600 * 24 * 30);
        months = Math.floor(months);
        let partOfPercent = curPercent / (12 * 100);
        let monthPayment = creditBody * (partOfPercent + partOfPercent / (((1 + partOfPercent) ** months) - 1));
        totalAmount = Number((monthPayment * months).toFixed(2));
    } 

    return totalAmount;
}

function getGreeting(name) {
    let myName;
    if (name) {
        myName = name;
    } else {
        myName = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${myName}`
    return greeting;
}

function isNumber(parameter) {
    if ((typeof(parameter) == "number") && (!isNaN(parameter))) {
        return true;
    } else {
        return false;
    }
}