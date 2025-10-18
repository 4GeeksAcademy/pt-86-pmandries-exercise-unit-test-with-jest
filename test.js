test("One dollar should be 146.26168224299064 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 / 1.07 * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26168224299064);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One yen should be 0.00555910543 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(156.5);
    const expected = 156.5 / 156.5 * 0.87;
    expect(fromYenToPound(156.5)).toBe(0.87);
});