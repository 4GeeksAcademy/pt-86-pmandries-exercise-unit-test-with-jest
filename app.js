let oneEurols = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar / 1.07 * 156.5;
    return valueInYen;
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromYenToPound = (valueInYen) => {
    let valueInPounds = valueInYen / 156.5 * 0.87;
    return valueInPounds;
}

// console.log(fromDollarToYen(1));
// console.log(fromEuroToDollar(3.5));
// console.log(fromYenToPound(156.5));

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};
