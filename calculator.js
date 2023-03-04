const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    devision: '/'
};

function calculate({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);   
            break;

        case OPERATIONS.substract:
            result = substract(a, b);
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;

        case OPERATIONS.devision:
            result = devision(a, b);
            break;

        default:
            break;
    }

    return result;
}