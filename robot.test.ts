let robots = require('./robot')
let Robot = robots.Robot;

test('valid position is greater than 0', () => {
    var r = new Robot();
    expect(r.isValidPosition(2, -1)).toBe(false);
});
test('valid position is lesser than 5', () => {
    var r = new Robot();
    expect(r.isValidPosition(1, 6)).toBe(false);
});
