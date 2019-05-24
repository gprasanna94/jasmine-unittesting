MathFunc = function() {};

MathFunc.prototype.sum = function(number1, number2) {
        return number1 + number2;
}

MathFunc.prototype.substract = function(number1, number2) {
    return number1 - number2;
}

MathFunc.prototype.multiply = function(number1, number2) {
    return number1 * number2;
}

MathFunc.prototype.divide = function(number1, number2) {
    return number1 / number2;
}

MathFunc.prototype.average = function(number1, number2) {
    return (number1 + number2) / 2;
}

MathFunc.prototype.factorial = function(number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    } else if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * this.factorial(number - 1);
    }
}
