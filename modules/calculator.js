const calculator = {
    add: (num1, num2) => Number((num1 + num2).toFixed(2)),
    subtract: (num1, num2) => Number((num1 - num2).toFixed(2)),
    divide: (num1, num2) => Number((num1 / num2).toFixed(2)),
    multiply: (num1, num2) => Number((num1 * num2).toFixed(2))
};

export default calculator;