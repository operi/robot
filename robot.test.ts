import { Robot, FACING } from './robot'

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

test('assert robot can move North', () => {
    r.place(1, 1, FACING.NORTH);
    r.move();
    expect(r.getPositionX()).toBe(1);
    expect(r.getPositionY()).toBe(2);
});

test('assert robot can move East', () => {
    r.place(1, 1, FACING.EAST);
    r.move();
    expect(r.getPositionX()).toBe(2);
    expect(r.getPositionY()).toBe(1);
});

test('assert robot can move South', () => {
    r.place(2, 2, FACING.SOUTH);
    r.move();
    expect(r.getPositionX()).toBe(2);
    expect(r.getPositionY()).toBe(1);
});

test('assert robot can move West', () => {
    r.place(2, 2, FACING.WEST);
    r.move();
    expect(r.getPositionX()).toBe(1);
    expect(r.getPositionY()).toBe(2);
});

test('assert robot can not cross North limit', () => {
    r.place(5, 5, FACING.NORTH);
    r.move();
    expect(r.getPositionX()).toBe(5);
    expect(r.getPositionY()).toBe(5);
});

test('assert robot can not cross East limit', () => {
    r.place(5, 5, FACING.EAST);
    r.move();
    expect(r.getPositionX()).toBe(5);
    expect(r.getPositionY()).toBe(5);
});

test('assert robot can not cross South limit', () => {
    r.place(5, 0, FACING.SOUTH);
    r.move();
    expect(r.getPositionX()).toBe(5);
    expect(r.getPositionY()).toBe(0);
});

test('assert robot can not cross West limit', () => {
    r.place(0, 5, FACING.WEST);
    r.move();
    expect(r.getPositionX()).toBe(0);
    expect(r.getPositionY()).toBe(5);
});