function parseCount(parameter) {
    let result = Number.parseInt(parameter, 10);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    }       
}

function validateCount(parameter) {
    try {
        return parseCount(parameter);
    } catch(e) {
        return e;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if ((firstSide + secondSide < thirdSide) ||
        (secondSide + thirdSide < firstSide) ||
        (firstSide + thirdSide < secondSide)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.firstSide = firstSide;
            this.secondSide = secondSide;
            this.thirdSide = thirdSide;
        }
    }

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let a = this.firstSide;
        let b = this.secondSide;
        let c = this.thirdSide;

        return Number((Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (e) {
        let errorObject = {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },

            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }

        return errorObject;
    }
}
