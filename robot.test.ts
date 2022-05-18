import { Robot } from './robot'

var r = null;

beforeEach(() => {
    r = new Robot();
})

test('valid position is within a y-axis limit of 0', () => {
    expect(Robot.isValidPosition(2, -1)).toBe(false);
});

test('valid position is within a y-axis limit of 5', () => {
    expect(Robot.isValidPosition(1, 6)).toBe(false);
});

test('valid position is within a x-axis limit of 0', () => {
    expect(Robot.isValidPosition(-1, 3)).toBe(false);
});

test('valid position is within a x-axis limit of 5', () => {
    expect(Robot.isValidPosition(7, 2)).toBe(false);
});
