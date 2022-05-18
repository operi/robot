let robots = require('./robot')
let Robot = robots.Robot;

test('valid position is within a y-axis limit of 0', () => {
    var r = new Robot();
    expect(r.isValidPosition(2, -1)).toBe(false);
});
test('valid position is within a y-axis limit of 5', () => {
    var r = new Robot();
    expect(r.isValidPosition(1, 6)).toBe(false);
});

test('valid position is within a x-axis limit of 0', () => {
    var r = new Robot();
    expect(r.isValidPosition(-1, 3)).toBe(false);
});
test('valid position is within a x-axis limit of 5', () => {
    var r = new Robot();
    expect(r.isValidPosition(7, 2)).toBe(false);
});
